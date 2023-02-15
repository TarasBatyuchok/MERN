import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from  '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import  { useParams, useNavigate } from "react-router-dom"


import { getPost } from "../../redux/actions/post";
import  useStyles from "./styles";

const PostDetails = () =>{
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    console.log(post)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();
    console.log(id);



    useEffect(()=>{
        dispatch(getPost(id));
    }, [id])

    if(!post) return null;

    if (isLoading) {
        return (
          <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
          </Paper>
        );
      }


    console.log("POST DETAILS");
    return(
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{post.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
            {/* <CommentSection post={post} /> */}
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </div>
        </div>
      </Paper>
    )
}

export default PostDetails;