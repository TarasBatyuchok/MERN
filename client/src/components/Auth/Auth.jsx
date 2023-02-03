import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {signin, signup} from '../../redux/actions/auth'
import { useDispatch } from 'react-redux';


import { Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core";
import Input from "./input";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useSatyles from "./styles";

const initialState = {firstName:'', lastName: '', email:'', password: '', confirmPassword:''};


const Auth = () => {
  const classes = useSatyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // local state for input show hiden password
  const [showPassword, setShowPassword] = useState(false);
  //state for auth
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  // const state = null;

  const handleShowPassoword = () =>
  setShowPassword((prevShowPassoword) => !prevShowPassoword);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup){
      dispatch(signup(formData, navigate));
    }else{
      dispatch(signin(formData, navigate));
    }

    console.log(formData)
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   // const token


  //   try{
  //     dispatch({ type: 'AUTH', data: { result, token} })
  //   }catch(error){
  //       console.log(error)
  //   }
  // };
  // const googleFailure = (error) => {
  //   console.log(error);
  //   console.log("Google Sign in was unsuccessfulю Try Again Later");
  // };
  

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  authoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassoword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Passoword"
                handleChange={handleChange}
                type="passoword"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
					{/* <GoogleOAuthProvider clientId="96292646870-tul05mh5kn6ok2srka8l7djutp5iab72.apps.googleusercontent.com"> */}
          {/* <GoogleLogin
            size="large"
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
          ></GoogleLogin>
					</GoogleOAuthProvider> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
