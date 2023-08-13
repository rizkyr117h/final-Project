const express = require('express');
const router = express.Router();
const videoController = require('../controllers/VideoController');

router.get('/video', videoController.getAllVideos);
router.get('/video/:videoID', videoController.getDetailVideoByVideoID);
module.exports = router;
