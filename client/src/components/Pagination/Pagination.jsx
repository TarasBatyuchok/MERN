import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@material-ui/lab'

// import { getPosts } from '../actions/posts';
import useStyles from './styles';

const Paginate = () => {
  const classes = useStyles();

  return (
    
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${1}`}
        />
      )}
    />
  );
};
  

export default Paginate;