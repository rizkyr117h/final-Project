/* eslint-disable react/prop-types */
import './Comment.css';

const Comment = ({ username, comment, timestamp }) => {
  return (
    <div className="comment">
      <p className="username">{username}</p>
      <p className="comment-text">{comment}</p>
      <p className="timestamp">{new Date(timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
