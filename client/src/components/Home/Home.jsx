import { React, useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getPost } from "../../redux/actions/post";
import Pagination from "../Pagination/Pagination";
import ChipInput from "material-ui-chip-input";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

import useStyles from "./styles.js";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container className={classes.gridContainer} justifyContent="space-between" alightitems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
		  <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <TextField name="search" variant="outlined" label="Search Memories" fullWidth value="TEST" onChange={() => {}} />
			<ChipInput
                style={{ margin: '10px 0' }}
                // value={tags}
                // onAdd={(chip) => handleAddChip(chip)}
                // onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
			   <Button onClick={null} className={classes.searchButton} variant="contained" color="primary">Search</Button>
          </AppBar>
		  <br/>
		  <Form currentId={currentId} setCurrentId={setCurrentId} />
		  <br/>
            <Paper className={classes.pagination} elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
