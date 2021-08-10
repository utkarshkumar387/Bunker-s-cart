import React, { useEffect, useRef } from 'react'
import makeStyles from './styles';
import Header from './header/header'
import CategoryCarousal from './categoriesCarousal/categoryCarousal';
import Box from '@material-ui/core/Box';

//to handle when their is no product in the category
function Products({ fruits, vegetables, spices, onAddToCart, onSnackbarHandleClick, setProductName }) {
    const classes = makeStyles();
    const allItems = [
        {
            id: 1,
            items: fruits,
            title: 'Fruits',
            description: 'Fruit is natures candy.',
        },
        {
            id: 2,
            items: vegetables,
            title: 'Vegitables',
            description: 'Eating vegetables make you feel good.',
        },
        {
            id: 3,
            items: spices,
            title: 'Spices',
            description: 'Variety is the spice of love.',
        },
        // {
        //     items: dairy,
        //     title: 'Milk and Dairy',
        //     width: '25%',
        // },
    ];
    return (
        <main className={classes.content}>
            {allItems.map((category) => (
                <Box className={classes.categoryBox} key={category.id} mb={10}>
                    <Box className={classes.header}>
                        <Header headerCategory={category.title} headerSubcategory={category.description} />
                    </Box>
                    <CategoryCarousal setProductName={setProductName} products={category.items} onAddToCart={onAddToCart} onSnackbarHandleClick={onSnackbarHandleClick} />
                </Box>
            ))}
        </main>
    )
}

export default Products
