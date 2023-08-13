const commentUseCase = require('../useCases/CommentUseCase');

class CommentController {
  async getCommentsByVideoID(req, res) {
    const { videoID } = req.params;
    try {
      const comments = await commentUseCase.getCommentsByVideoID(videoID);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createComment(req, res) {
    const { username, comment, videoID } = req.body;
    if (!username || !comment || !videoID) {
      return res.status(400).json({ error: 'Username, comment, and videoID are required fields' });
    }

    try {
      await commentUseCase.createComment(username, comment, videoID);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ status: 'fail', error: 'Internal server error' });
    }
  }
}

module.exports = new CommentController();
