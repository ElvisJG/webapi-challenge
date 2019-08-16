const express = require('express');

const Project = require('../helpers/projectModel.js');
const router = express.Router();

//
router.get('', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.get('', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.post('', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.put('', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//
router.delete('', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

module.exports = router;
