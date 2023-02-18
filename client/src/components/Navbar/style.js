import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { Backdrop } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
        color: "white",
        backgroundColor: "rgba( 255, 255, 255, 0.5 )",
        backdropFilter: "blur( 10px )"
        
    },
    heading: {
        backgroundColor: "#2AA5A0",
        backgroundImage: "linear-gradient(90deg, #fc00ff, #00dbde)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: 40,
        textDecoration: "none",

    },
    image: {
        marginLeft: "15px",
        
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
        
    },
    userName: {
        display: "flex",
        alignItems: "center",
        color: "black",
        backgroundColor: "#2AA5A0",
        backgroundImage: "linear-gradient(90deg,  #485563, #29323c)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textDecoration: "none",
        
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    // purple: {
    //     color: "white",
    //     backgroundColor: "white",
    // },
}));
