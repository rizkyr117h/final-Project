const commentRepository = require('../repositories/CommentRepository');

class CommentUseCase {
  async getCommentsByVideoID(videoID) {
    return commentRepository.getCommentsByVideoID(videoID);
  }

  async createComment(username, comment, videoID) {
    return commentRepository.createComment(username, comment, videoID);
  }
}

module.exports = new CommentUseCase();
