import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from '@material-ui/lab';
import { getPost } from "../../redux/actions/post";

// import { getPosts } from '../actions/posts';
import useStyles from './styles';

const Paginate = ({ page }) => {
  const classes = useStyles();
  const { numberOfPages } = useSelector((state) =>  state.posts);

  const dispatch = useDispatch();



  useEffect(() => {
     if(page) dispatch(getPost(page));
  }, [page]);


  return (
    
    <Pagination
      classes={{ ul: classes.ul }}
      count={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};
  

export default Paginate;