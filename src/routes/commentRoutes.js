const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');

router.get('/comment/:videoID', commentController.getCommentsByVideoID);
router.post('/comment', commentController.createComment);

module.exports = router;
