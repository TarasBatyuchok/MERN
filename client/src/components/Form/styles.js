import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),

    backgroundColor: "rgba( 255, 255, 255, 0.6 )",
    backdropFilter: "blur( 10px )"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    overflowX: "hidden",
    backgroundColor: "white)",
    

    
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));