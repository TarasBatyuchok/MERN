import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
    },
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: "16px",
      },
      pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
      },
      gridContainer: {
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column-reverse',
        },
      },
}));