const express = require('express');

const Project = require('../helpers/projectModel.js');
const router = express.Router();

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.get();
    res.status(200).json(projects);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// POST /api/projects
router.post('/', validateEntry, async (req, res) => {
  try {
    const addProject = await Project.insert(req.body);
    res.status(200).json(addProject);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// PUT /api/projects/{id}
router.put('/:id', async (req, res) => {
  try {
    const update = await Project.update(req.params.id, req.body);
    res.status(200).json(update);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// DELETE /api/projects/{id}
router.delete('/:id', async (req, res) => {
  try {
    const destroy = await Project.remove(req.params.id);
    res.status(200).json(destroy);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// Validation
function validateEntry(req, res, next) {
  if (!req.body.name && !req.body.description) {
    res.status(400).json({ message: 'missing body' });
  } else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field' });
  } else if (!req.body.description) {
    res.status(400).json({ message: 'missing required description field' });
  } else {
    next();
  }
}

module.exports = router;
