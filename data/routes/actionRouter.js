const express = require('express');

const Action = require('../helpers/actionModel.js');
const Project = require('../helpers/projectModel.js');
const router = express.Router();

//
router.get('/', async (req, res) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// GET /api/projects/{id}/actions
router.get('/:id/projects', async (req, res) => {
  try {
    const project = await Project.getProjectActions(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.post(
  '/:id/projects',
  [validateActions, validateProjectId],
  async (req, res) => {
    try {
      const action = { ...req.body, project_id: req.params.id };
      const addAction = await Action.insert(action);
      res.status(201).json(addAction);
    } catch (error) {
      // log error
      console.log(error);
      res.status(500).json({ message: 'Error processing request' });
    }
  }
);

//
router.put('/:id', [validateActions, validateProjectId], async (req, res) => {
  try {
    const update = await Action.update(req.params.id, req.body);
    res.status(200).json(update);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.delete('/:id', validateProjectId, async (req, res) => {
  try {
    const destroy = await Action.remove(req.params.id);
    res.status(200).json(destroy);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// Validation Middleware
function validateActions(req, res, next) {
  if (Object.keys(req.body.description).length > 128) {
    res.status(400).json({ message: 'Why?... just... why?' });
  } else if (!req.body.description) {
    res.status(400).json({ message: 'missing required description field' });
  } else if (!req.body.notes) {
    res.status(400).json({ message: 'missing required notes field' });
  } else {
    next();
  }
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  Project.getProjectActions(id)
    .then(project => {
      if (project) {
        req.project_id = project;
        next();
      } else {
        res.status(400).json({ message: 'invalid project ID' });
      }
    })
    .catch(error => {
      // log error
      console.log(error);
      res.status(500).json({ message: 'Error processing request' });
    });
}

module.exports = router;
