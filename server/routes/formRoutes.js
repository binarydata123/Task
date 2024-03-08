
const express = require('express');
const router = express.Router();
const FormData = require('../modal/form-data');

router.post('/submit-form', async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, message } = req.body;
    // Create new FormData document
    const formData = new FormData({
      username,
      email,
      message
    });

    // Save the form data to the database
    await formData.save();

    res.status(201).json({ message: 'Form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
