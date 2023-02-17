import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../redux/actions/post';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post?.comments);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  console.log(user)
  const commentsRef = useRef();

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;

    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');


    // commentsRef.current.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
      {/* <Typography gutterBottom variant="h6">Comments</Typography> */}
        <div className={classes.commentsInnerContainer}>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
        <div style={{ width: '80%' }}>
          <Typography gutterBottom  variant="h6">Write a comment</Typography>
          <TextField fullWidth minRows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} color="primary" variant="contained" onClick={handleClick}>
            Comment
          </Button>
        </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
