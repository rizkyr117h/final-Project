const videoUseCase = require('../useCases/VideoUseCase');

class VideoController {
  async getAllVideos(req, res) {
    try {
      const videos = await videoUseCase.getAllVideos();
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getDetailVideoByVideoID(req, res){
    const { videoID } = req.params;
    try{
      const video = await videoUseCase.getDetailVideoByVideoID(videoID);
      res.status(200).json(video);
    } catch (error){
      res.status(500).json({error: 'Internal server error'});
    }
  }
}

module.exports = new VideoController();
