/* eslint-disable react-refresh/only-export-components */
import CommentList from '../components/CommentList';
import ProductList from '../components/ProductList';
import VideoPlay from '../components/VideoPlay';
import './VideoDetails.css';

function VideoDetails() {
  return (
    <div className="app-container">
      <ProductList />
      <VideoPlay />
      <CommentList />
    </div>
  );
}

export default VideoDetails;

export async function loader({ params }) {
  const [videoResponse, commentResponse, productResponse] = await Promise.all([
    fetch('http://localhost:3000/video/' + params.videoID),
    fetch('http://localhost:3000/comment/' + params.videoID),
    fetch('http://localhost:3000/product/' + params.videoID)
  ]);

  const [videoData, commentData, productData] = await Promise.all([
    videoResponse.json(),
    commentResponse.json(),
    productResponse.json()
  ]);

  return { video: videoData, comments: commentData, product: productData };
}
