import { useLoaderData } from 'react-router-dom';
import './VideoList.css';
import Video from './Video';

function VideoList() {
  const videos =  useLoaderData();

  return (
    <div className="video-list-container">
      {videos.map((video) => (
        <Video key={video.videoID} videoID={video.videoID} thumbnailURL={video.thumbnailURL}/>
      ))}
    </div>
  );
}

export default VideoList;
