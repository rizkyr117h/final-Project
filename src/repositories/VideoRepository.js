const Video = require('../models/VideoModel');

class VideoRepository {
  async getAllVideos() {
    return Video.find({}, { _id: 0, videoID: 1, thumbnailURL: 1 });
  }
}

module.exports = new VideoRepository();
