const videoRepository = require('../repositories/VideoRepository');

class VideoUseCase {
  async getAllVideos() {
    return videoRepository.getAllVideos();
  }

  async getDetailVideoByVideoID(videoID){
    return videoRepository.getDetailVideoByVideoID(videoID);
  }
}

module.exports = new VideoUseCase();
