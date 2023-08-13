import { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import { MdMessage } from 'react-icons/md';
import './CommentForm.css';

// eslint-disable-next-line react/prop-types
const CommentForm = ({ videoID }) => {
  const navigate = useNavigate();

  const [newComment, setNewComment] = useState({
    username: '',
    comment: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch('http://localhost:3000/comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newComment.username,
          comment: newComment.comment,
          videoID: videoID,
        }),
      });

      if (response.ok) {
        setNewComment({
          username: '',
          comment: '',
        });
        navigate(`/${videoID}`);
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  return (
    <div className=' comment-form'>
      <h2 className='logo'>
        <MdMessage />
        Add a Comment</h2>
      <div>
        <input
          type="text"
          id="username"
          name="username"
          value={newComment.username}
          onChange={handleInputChange}
          placeholder='Username'
        />
      </div>
      <div>
        <textarea
          id="comment"
          name="comment"
          value={newComment.comment}
          onChange={handleInputChange}
          placeholder='comment'
        />
      </div>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentForm;
