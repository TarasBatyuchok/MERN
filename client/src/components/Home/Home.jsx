
import { React,useState ,useEffect} from "react";
import { Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPost } from '../../redux/actions/post';
import Form from  "../Form/Form";
import Posts from "../Posts/Posts";

import useStyles from './styles.js';



const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPost());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    className={classes.mainContaine}
                    justifyContent="space-between"
                    alightitems="stretch"
                    spacing={4}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;