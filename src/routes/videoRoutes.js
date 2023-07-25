const express = require('express');
const router = express.Router();
const videoController = require('../controllers/VideoController');

router.get('/video', videoController.getAllVideos);

module.exports = router;
