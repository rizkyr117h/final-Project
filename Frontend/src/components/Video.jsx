import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */

import './Video.css'
function Video({videoID, thumbnailURL }) {
  const getVideoIDFromURL = (url) => {
    const realURL = url.split('v=')[1];
    return realURL;
  };

  return (
    <div className='wrapper'>
      <Link to= {videoID}>
      <img
        src={`https://img.youtube.com/vi/${getVideoIDFromURL(thumbnailURL)}/0.jpg`}
        width="100%"
        />
      </Link>
    </div>
  );
}

export default Video;
