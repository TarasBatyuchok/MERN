import React from "react";
import { Grid, CircularProgress} from  '@material-ui/core'

import Post from "./Post/Post";
import { useSelector } from 'react-redux';
import useStyles from './styles.js';



const Posts =({ setCurrentId })=>{
    const classes = useStyles();
    const { posts, isLoading } = useSelector((state) => state.posts);
    console.log(posts)
    // const classes = useStyles();


    if (!posts && !isLoading) return 'No posts';


    return(
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post}  setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}


export default Posts;