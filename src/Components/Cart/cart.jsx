import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem/cartItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(4),
    },
    receipt: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    itemElements: {
        border: '2px solid #F8F8F8',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    yourCartHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: '#424242',
    },
    receiptHeading: {
        paddingBottom: theme.spacing(2),
        color: '#424242',
    },
    receiptTypo: {
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    textColor: {
        color: '#424242',
    }
    // allItems: {
    //     marginTop: theme.spacing(3),
    //     marginBottom: theme.spacing(3),
    // }
}))

function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleRemoveCart }) {
    const classes = useStyles();
    console.log(cart);
    // return <div></div>

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart.
            <Link to="/">Add Now</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <hr />
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={12} key={item.id}>
                            <div>
                                <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.receipt} elevation={0}>
                        <Typography className={classes.receiptHeading} variant="h6">Price Details</Typography>
                        <Grid className={classes.receiptTypo} container>
                            <Grid item xs={6} sm={6}>
                                <Typography color="textSecondary">Total MRP</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} align="right">
                                <Typography color="textSecondary">{cart.subtotal.formatted_with_symbol}</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.receiptTypo} container>
                            <Grid item xs={6} sm={6}>
                                <Typography color="textSecondary">Shipping Charge</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} align="right">
                                <Typography color="textSecondary">Free</Typography>
                            </Grid>
                        </Grid>
                        <hr style={{ margin: "10px 0" }} />
                        <Grid className={classes.receiptTypo} container>
                            <Grid item xs={6} sm={6}>
                                <Typography color="textSecondary">Subtotal</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} align="right">
                                <Typography color="textSecondary">{cart.subtotal.formatted_with_symbol}</Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <div className={classes.buttons}>
                                <Button onClick={handleRemoveCart}>Empty Cart</Button>
                                <Button component={Link} to="/checkout" size="large" type="button" variant="outlined" color="primary">Checkout</Button>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )

    if (!cart.line_items) return 'Loading';

    return (
        <Container>
            <Typography className={classes.yourCartHeader} variant="h6" component="h6">
                <b>My Shopping Cart</b>
            </Typography>
            <CartItem />
            {(!cart.line_items.length) ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
