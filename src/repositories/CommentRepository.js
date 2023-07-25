const Comment = require('../models/CommentModel');

class CommentRepository {
  async getCommentsByVideoID(videoID) {
    return Comment.find({ videoID }, { _id: 0, username: 1, comment: 1, timestamp: 1 });
  }

  async createComment(username, comment, videoID) {
    const newComment = new Comment({ username, comment, videoID });
    return newComment.save();
  }
}

module.exports = new CommentRepository();
