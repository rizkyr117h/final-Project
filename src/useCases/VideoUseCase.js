const videoRepository = require('../repositories/VideoRepository');

class VideoUseCase {
  async getAllVideos() {
    return videoRepository.getAllVideos();
  }
}

module.exports = new VideoUseCase();
