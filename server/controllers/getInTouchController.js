const GetInTouch = require('../models/GetInTouch');

const handleGetInTouchForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newMessage = new GetInTouch({ name, email, phone, message });
    await newMessage.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
};

module.exports = { handleGetInTouchForm };
