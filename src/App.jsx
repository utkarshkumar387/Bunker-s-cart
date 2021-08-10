import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Splash, CategoriesList, Chatbot, Auth, DirectionSnackbar, Items, Checkout } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}
function App() {
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [spices, setSpices] = useState([]);
    // const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [transition, setTransition] = useState(undefined);
    const [productName, setProductName] = useState("");
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const snackbarHandleClick = () => {
        setTransition(() => TransitionUp);
        setOpenSnackbar(true);
    };

    const snackbarHandleClose = () => {
        setOpenSnackbar(false);
    };

    // const handleOpen = () => {
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setOpen(false);
    // }
    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list();

    //     setProducts(data);
    // }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleRemoveCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        console.log('new cart is', newCart)
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        console.log(checkoutTokenId, newOrder);
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            console.log('order done');
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            console.log(error);
            setErrorMessage(error.data.error.message);
        }
    }

    const allFruits = async () => {
        const { data } = await commerce.products.list({
            category_slug: ['Fruits'],
        })
        setFruits(data);
    }

    const allVegetables = async () => {
        const { data } = await commerce.products.list({
            category_slug: ['Vegetables'],
        })
        setVegetables(data);
    }

    const allSpices = async () => {
        const { data } = await commerce.products.list({
            category_slug: ['Spices'],
        })
        setSpices(data);
    }

    // const allDairy = async () => {
    //     const { data } = await commerce.products.list({
    //         category_slug: ['Spices'],
    //     })
    //     setDairy(data);
    // }
    useEffect(() => {
        fetchCart();
        allFruits();
        allVegetables();
        allSpices();
    }, []);
    console.log(cart);
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        {/* <Auth onOpen={open} /> */}
                        {/* <Chatbot /> */}
                        <Splash totalItems={cart.total_items} />
                        <CategoriesList />
                        <Products fruits={fruits} setProductName={setProductName} onSnackbarHandleClick={snackbarHandleClick} vegetables={vegetables} spices={spices} onAddToCart={handleAddToCart} />
                        <DirectionSnackbar productName={productName} onSnackbarHandleClose={snackbarHandleClose} openSnackbar={openSnackbar} transition={transition} />
                    </Route>
                    <Route exact path="/cart">
                        <Navbar totalItems={cart.total_items} />
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleRemoveCart={handleRemoveCart}
                        />
                    </Route>
                    <Route path="/items">
                        <Navbar totalItems={cart.total_items} />
                        <Items />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default React.memo(App)
