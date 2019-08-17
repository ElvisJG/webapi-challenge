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
router.post('/:id/projects', async (req, res) => {
  try {
    const action = { ...req.body, project_id: req.params.id };
    const addAction = await Action.insert(action);
    res.status(201).json(addAction);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  try {
    const destroy = await Action.remove(req.params.id);
    res.status(200).json(destroy);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

module.exports = router;
