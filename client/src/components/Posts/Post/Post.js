import React, { useState } from "react";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/post";

import useStyles from "./styles.js";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate =useNavigate();
  const [likes , setLikes] = useState(post?.likes);


  const userId = user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));
    console.log(likes)

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      console.log(...post?.likes, userId)
      setLikes([...post?.likes, userId]);
    }
  };

  //  1 like, 2 likes

  // const Likes = () => {
  //   if (likes.length > 0) {
  //     return likes.find((like) => like === userId) ? (
  //       <>
  //         <ThumbUpAltIcon fontSize="small" />
  //         &nbsp;
  //         {likes.length > 2
  //           ? `You and ${likes.length - 1} others`
  //           : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
  //       </>
  //     ) : (
  //       <>
  //         <ThumbUpAltOutlined fontSize="small" />
  //         &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
  //       </>
  //     );
  //   }

  //   return (
  //     <>
  //       <ThumbUpAltOutlined fontSize="small" />
  //       &nbsp;Like
  //     </>
  //   );
  // };


    const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };


  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    navigate(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card}  elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
        component='div'
        
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {(user?.result?._id === post?.creator || user?.result?._id === post?.creator) && (
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        )}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          // onClick={() => dispatch(likePost(post._id))}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {user?.result?._id === post?.creator && (
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
