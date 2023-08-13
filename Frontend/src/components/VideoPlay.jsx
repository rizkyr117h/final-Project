import { useLoaderData } from 'react-router-dom';
import ReactPlayer from 'react-player'
function VideoPlay() {
  const data = useLoaderData();
  const video = data.video[0];
  const url = video.thumbnailURL;
  return (
    <div className="video-container">
    {video ? (
      <>
        <ReactPlayer
          url={url}
          playing={true}
          width={700}
          height={397}
        />
      </>
    ) : (
      <p>Loading video...</p>
    )}
    </div>
  );
}




export default VideoPlay;
