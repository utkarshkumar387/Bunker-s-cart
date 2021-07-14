import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Snackbar } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { ContactSupportOutlined } from '@material-ui/icons';

const BootstrapButton = withStyles({
    root: {
        border: '1px solid #0BDA51',
        color: '#0BDA51',
    },

})(Button);

function Product({ product, onAddToCart, onSnackbarHandleClick, setProductName }) {
    const classes = makeStyles();
    const [open, setOpen] = useState(false);
    // const [openSnackbar, setOpenSnackbar] = useState(false);
    // const [transition, setTransition] = useState(undefined);
    // const [productName, setProductName] = useState("");

    const onBuyNowTrue = (productName, productID) => {
        console.log('inside on buy now true')
        onAddToCart(productID);
        onSnackbarHandleClick();
        setProductName(productName)
    }

    // const snackbarHandleClick = () => {
    //     console.log('open sanckbar handle')
    //     setTransition(() => TransitionUp);
    //     setOpenSnackbar(true);
    // };

    // const snackbarHandleClose = () => {
    //     setOpenSnackbar(false);
    // };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const snackbarBool = (productName, bool) => {
    //     console.log('inside snackbarBool func', bool);
    //     return <DirectionSnackbar snackbar={productName} onHandleClickSnackbar={bool} />
    // }
    return (
        <>
            <Paper variant="outlined" elevation={0} className={classes.root}>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="180"
                    image={product.media.source}
                    title={product.name}
                />
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>{product.name}</b>
                        </Typography>
                        <Typography gutterBottom>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </Box>
                    {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" /> */}
                </CardContent>
                <CardActions>
                    <BootstrapButton variant="outlined" color="primary" onClick={() => { onBuyNowTrue(product.name, product.id) }}>
                        Buy Now
                    </BootstrapButton>
                </CardActions>
            </Paper>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">It seems you are not part of us</h2>
                        <p id="transition-modal-description">Please Login to be our part.</p>
                    </div>
                </Fade>
            </Modal>
            {/* <Snackbar
                open={openSnackbar}
                onClose={snackbarHandleClose}
                TransitionComponent={transition}
                message={`${productName} added to cart`}
                key={transition ? transition.name : ''}
            /> */}
        </>


    )
}

export default Product
