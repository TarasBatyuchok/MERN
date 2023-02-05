import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";

import { useDispatch } from "react-redux";
import useStyles from "./style";
import decode from 'jwt-decode';
import { LOGOUT } from '../../redux/constants/actionsTypes';
import memories from "../../images/memoriesLogo.png";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const navigation = useNavigate();
    let location = useLocation();
    console.log(user)
    const logout = () => {
        dispatch({ type: LOGOUT });

        navigation("/auth");

        setUser(null);
    };
    // console.log(user);
    // useEffect(() => {
    //     const token = user?.result;
    //     console.log(token)

    //     if (token) {
    //         const decodedToken = decode(token);
    //         console.log(decodedToken)

    //         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    //     }
    //     // console.log(JSON.parse(localStorage.getItem("profile")))
    //     setUser(JSON.parse(localStorage.getItem("user")));
    // }, [location]);

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
            const decodedToken = decode(token);
        
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <AppBar className={classes.appBar} position="static">
            <div className={classes.brandContainer}>
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                ></Typography>
                <Link to="/">
                    <img
                        className={classes.image}
                        src={memories}
                        alt="icon"
                        height="60"
                    />
                </Link>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        >{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">
                        {user?.result.name} 
                        </Typography>
                        <Button
                            variant="contained"
                            classes={classes.logout}
                            color="secondary"
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
