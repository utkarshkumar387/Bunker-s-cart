import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    details: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
        height: 170
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(5)
    },
    buttonInner: {
        background: '#F8F8F8',
    },
    quantity: {
        margin: '0 8px',
    },
    textColor: {
        color: '#424242',
    }

}));

export default function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart }) {
    const classes = useStyles();
    const theme = useTheme();
    if (!item || item.product_id === null) return <></>;
    console.log('items inside cart item', item);

    return (
        <Paper elevation={0} className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={item.media.source}
                title={item.name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.textColor} component="h6" variant="h6">
                        {item.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {item.line_total.formatted_with_symbol}
                    </Typography>
                    <div className={classes.buttons}>
                        <div className={classes.controls}>
                            <Button className={classes.buttonInner} type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                            <Typography className={classes.quantity}>{item.quantity}</Typography>
                            <Button className={classes.buttonInner} type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                        </div>
                        <Button type="button" variant="outlined" onClick={() => handleRemoveFromCart(item.id)}>Remove Item</Button>
                    </div>
                </CardContent>
            </div>
        </Paper>
    );
}

// export default cartItem
