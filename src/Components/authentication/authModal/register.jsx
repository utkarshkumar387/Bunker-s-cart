import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import fire from '../../../fire';
import Login from './login';
import {
    Button,
    Card,
    CardContent,
    Typography,
    InputLabel,
    FormControl,
    InputAdornment,
    OutlinedInput,
    TextField,
    IconButton,
    Modal
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '400px'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        display: 'flex',
        'margin-left': 'auto',
        'margin-right': 'auto'
    },
    cardContent: {
        'margin': '2ch',
        display: 'flex',
        flexDirection: 'column'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Register({ email, setEmail, password, setPassword, handleLogin, hasAccount, setHasAccount, emailError, passwordError, handleAuthState, handleSignup }) {
    const classes = useStyles();


    // const [values, setValues] = useState({
    //     "email": "",
    //     "phone_no": "",
    //     "name": ""
    // });
    // const [invalidInput, setInvalidInput] = useState(false);

    const [hidePassword, setHidePassword] = useState(true);

    // const defaultErrorText = "Please enter all the required details!";
    // const [errorDetails, setErrorDetails] = useState(defaultErrorText);

    // const [successfulRegistration, setSuccessfulRegistration] = useState(false);

    // const handleChange = (prop) => (event) => {
    //     setInvalidInput(false);
    //     setErrorDetails(defaultErrorText);
    //     console.log('prop to add values', prop);
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const handleRegistration = (event) => {
    //     event.preventDefault();

    //     let ifAnyFieldEmpty = false;
    //     Object.keys(values).forEach(key => {
    //         if (values[key] === '') ifAnyFieldEmpty = true;
    //     });

    //     if (ifAnyFieldEmpty) {
    //         setInvalidInput(true);
    //         return;
    //     }
    //     const headers = {
    //         'Content-Type': 'text/plain'
    //     };
    //     axios.post('http://localhost:7000/register', values)
    //         .then(res => {
    //             setSuccessfulRegistration(true);
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //             if (err.response && err.response.status === 400) {
    //                 setInvalidInput(true);
    //                 return;
    //             }
    //             else {
    //                 setInvalidInput(true);
    //                 setErrorDetails(`Please verify if you have your node server running on port "7000" and you have implemented all the mentioned APIs! If you need help try accessing the hints!`);
    //             }
    //         });
    // };

    // if (successfulRegistration) {
    //     handleAuthState(false)
    // }

    // // const redirectToLogin = () => {
    // //     console.log('redirected to login')
    // //     return <Redirect to="/login" />
    // // }

    return (
        <>
            <Switch>
                <Route path="/login">
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handlesignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                </Route>
                <Route path="/">
                    <div className={classes.root}>
                        <Typography style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}><b>Create your Profile</b></Typography>
                        <TextField
                            className={clsx(classes.margin)}
                            required
                            id="filled-required"
                            label="User-ID"
                            variant="outlined"
                            fullWidth
                        // value={email}
                        // onChange={handleChange('email')}
                        />
                        <p>{emailError}</p>
                        <FormControl variant="outlined" fullWidth className={clsx(classes.margin)}>
                            <InputLabel htmlFor="input-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="input-password"
                                type={hidePassword === false ? 'text' : 'password'}
                                // value={password}
                                // onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setHidePassword(hidePassword === false ? true : false) }}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {hidePassword === false ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <p>{passwordError}</p>
                        <Button
                            color='primary'
                            variant='outlined'
                            className={clsx(classes.margin)}
                            onClick={handleSignup}
                        >
                            Register
                        </Button>
                        <Button
                            color='primary'
                            variant='outlined'
                            className={clsx(classes.margin)}
                            onClick={() => handleAuthState(false)}
                        >
                            Login
                        </Button>
                    </div>
                    <div style={{ display: 'flex', width: "100%" }}>
                        {/* <Modal
                            open={invalidInput}
                            onClose={() => setInvalidInput(false)}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            style={{ margin: 'auto' }}
                        >
                            <div className={clsx(classes.paper)} style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography><b>{errorDetails}</b></Typography>
                                <Button
                                    onClick={() => setInvalidInput(false)}
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: "25px", marginLeft: "auto", marginRight: 'auto' }}
                                >
                                    close
                                </Button>
                            </div>
                        </Modal> */}
                    </div>
                </Route>
            </Switch>
        </>
    );
}