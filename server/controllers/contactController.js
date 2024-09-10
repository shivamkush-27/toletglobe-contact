const Contact = require('../models/Contact');

const handleContactForm = async (req, res) => {
  try {
    const { topic, name, email, message } = req.body;
    const newContact = new Contact({ topic, name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
};

module.exports = { handleContactForm };
