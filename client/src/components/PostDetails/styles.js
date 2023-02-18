import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper:{
    backgroundColor: "rgba( 255, 255, 255, 0.6 )",
    backdropFilter: "blur( 10px )"
  },
  comment:{
    backgroundColor: "rgba( 255, 255, 255, 0.6 )",
    backdropFilter: "blur( 10px )"
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',

    // flexDirection: 'column'
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    justifyContent: "space-between",
    backgroundColor: "rgba( 255, 255, 255, 0.0 )",
    backdropFilter: "blur( 0px )"
  },
  name:{
    backgroundColor: "#2AA5A0",
    backgroundImage: "linear-gradient(90deg, #fc00ff, #00dbde)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }
}));
