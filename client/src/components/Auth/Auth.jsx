import React, { useState } from "react";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@material-ui/core";
import Input from "./input";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useSatyles from "./styles";

const Auth = () => {
    const classes = useSatyles();
    const [showPassword, setShowPassoword] = useState(false);
    // const state = null;

    const isSignup = true;
    const handleShowPassoword = () => setShowPassoword((prevShowPassoword) => !prevShowPassoword);
    const handleSubmit = () => { };
    const handleChange =() =>{ };

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
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input name="email" label="Email Address"  handleChange={handleChange} type="email" />
                        <Input name="password" label="Password"  handleChange={handleChange} type={showPassword ? "text" : "password"}  handleShowPassword={handleShowPassoword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Passoword" handleChange={handleChange} type="passoword" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                        { console.log(Math.min() > Math.max())}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
