import { useParams } from 'react-router-dom';
import Comment from './Comment';
import './CommentList.css';
import { useLoaderData } from 'react-router-dom';
import CommentForm from './CommentForm';

const CommentList = () => {
  const { videoID } = useParams();
  const data = useLoaderData();
  const comments = data.comments;

  return (
    <div className='container'>
      <div className="comment-list">
        {comments.length === 0 ? (
          // eslint-disable-next-line react/no-unescaped-entities
          <p className="no-comment-message">Don't have comment</p>
        ) : (
          comments.map((comment, index) => (
            <Comment
              key={index}
              username={comment.username}
              comment={comment.comment}
              timestamp={comment.timestamp}
            />
          ))
        )}
      </div>
      <CommentForm videoID={videoID} />
    </div>
  );
};

export default CommentList;
