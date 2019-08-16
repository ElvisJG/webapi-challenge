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

// GET /api/projects/{id}/actions
router.get('/:id/actions', async (req, res) => {
  try {
    const project = await Project.getProjectActions(id);
    res.status(200).json(project);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const addProject = await Project.insert(req.body);
    res.status(200).json(addProject);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
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

//
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

module.exports = router;
