import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './style'
import AddressForm from '../addressForm';
import PaymentForm from '../paymentForm';
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

function Checkout({ cart, order, onCaptureCheckout, error }) {

    console.log(cart.id)
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setshippingData] = useState({});

    //creating checkout token
    const getToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token)
        } catch (error) {
            console.log(error)
        }
    }

    const nextStep = () => setActiveStep((prevActiveState) => prevActiveState + 1);
    const backStep = () => setActiveStep((prevActiveState) => prevActiveState - 1);

    useEffect(() => {
        getToken();
    }, [])

    const next = (data) => {
        console.log('data from address from', data);
        setshippingData(data);

        nextStep();
    }

    if (!checkoutToken) return 'Loading';

    const Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase. {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.Divider}></Divider>
                <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if (error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    const Form = () => activeStep === 0 ?
        <AddressForm
            checkoutToken={checkoutToken}
            next={next} /> :
        <PaymentForm
            shippingData={shippingData}
            checkoutToken={checkoutToken}
            backStep={backStep}
            nextStep={nextStep}
            onCaptureCheckout={onCaptureCheckout} />
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;
