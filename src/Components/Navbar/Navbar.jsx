import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Bull from '../../assets/bull.png';
import { Link, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../../fire';


const BootstrapIconButton = withStyles({
    root: {
        color: '#fff',
    },

})(IconButton);
const BootstrapButton = withStyles({
    root: {
        backgroundColor: '#0BDA51',
        color: '#fff',
    },

})(Button);


// const logoutUser = () => {
//     localStorage.removeItem("auth-Token");
//     window.location.reload();
//     return <Redirect to="/" />;
// }
function Navbar({ totalItems, onHandleOpen }) {
    const classes = makeStyles();
    const location = useLocation();
    // const [user, setUser] = useState('');
    // const logoutUser = () => {
    //     fire.auth.signOut();
    // }

    // const authListener = () => {
    //     fire.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser("");
    //         }
    //     })
    // }

    // useEffect(() => {
    //     authListener()
    // }, [])

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" style={{ background: location.pathname == "/" ? 'transparent' : "primary", boxShadow: 'none' }}>
                {/* <Container> */}
                <Toolbar>
                    <div className={classes.title}>
                        <Link to="/">
                            <img src={Bull} height="80" alt="Website logo"></img>
                        </Link>
                        {location.pathname != "/" && (<span className={classes.brandName}>Bunker's Cart</span>)}
                    </div>
                    {location.pathname == "/" && (
                        <>
                            <BootstrapIconButton component={Link} to="/cart" aria-label="show items in cart" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </BootstrapIconButton>
                        </>
                    )}
                    {/* {(localStorage.getItem("auth-Token") !== undefined && localStorage.getItem("auth-Token") !== null) ?
                        location.pathname == "/" && (
                            <>
                                <Box ml={2}>
                                    <Button variant="contained" component={Link} to="/items" color="secondary">
                                        Item list
                                    </Button>
                                </Box>
                                <Box ml={2}>
                                    <Button variant="contained" onClick={() => logoutUser()} color="secondary">
                                        Log Out
                                    </Button>
                                </Box>
                            </>
                        ) : <BootstrapButton className={classes.loginButton} variant="contained" onClick={() => onHandleOpen()} color="inherit">Login</BootstrapButton>
                    } */}
                </Toolbar>
                {/* </Container> */}
            </AppBar>
        </div>
    )
}

export default Navbar
