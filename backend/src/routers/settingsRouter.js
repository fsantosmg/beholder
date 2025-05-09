const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const settingsController = require("../controllers/settingsController");

router.get('/', settingsController.getSettings);

router.patch('/', settingsController.updateSettings);

module.exports = router;