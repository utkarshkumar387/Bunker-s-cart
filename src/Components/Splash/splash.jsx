import React from "react";
import Navbar from '../Navbar/Navbar';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import './style.css';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});
const BootstrapButton = withStyles({
    root: {
        border: '1px solid #0BDA51',
        color: '#0BDA51',
    },

})(Button);
function Splash({ totalItems, onHandleOpen }) {
    return (
        <div className="splashImage">
            <Navbar onHandleOpen={onHandleOpen} totalItems={totalItems} />
            <div className="splashImage_outer">
                <div className="splashImage_inner">
                    <p className="splashImage_heading">Welcome to <span className="splashImage_brandName">Bunker's Cart</span></p>
                    <p className="splashImage_quote">I like my freedom. I like to do my own grocery shopping.</p>
                    <Box my={4} className="splashImage_button">
                        <ThemeProvider theme={theme}>
                            <BootstrapButton variant="outlined" color="primary">
                                SHOP NOW
                            </BootstrapButton>
                        </ThemeProvider>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Splash;