const express = require('express');
const { handleContactForm } = require('../controllers/contactController');
const { handleGetInTouchForm } = require('../controllers/getInTouchController');

const router = express.Router();

// Route for Contact form
router.post('/contact', handleContactForm);

// Route for Get In Touch form
router.post('/get_in_touch', handleGetInTouchForm);

module.exports = router;
