import React, { useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../poduct/product';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./style.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
// import { Categories } from '@chec/commerce.js/features/categories';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


function CategoryCarousal({ products, onAddToCart, onSnackbarHandleClick, setProductName }) {
    return (
        <div>
            <Swiper className="swiperBox" breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
                1280: {
                    width: 1280,
                    slidesPerView: 4,
                },
            }} slidesPerView={1} spaceBetween={20} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={false} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {products.map((product) => (
                    <Grid item xs={12} key={`grid${product.id}`} sm={6} md={4} lg={3}>
                        <SwiperSlide key={product.id}>
                            <Product setProductName={setProductName} onSnackbarHandleClick={onSnackbarHandleClick} product={product} onAddToCart={onAddToCart} />
                        </SwiperSlide>
                    </Grid>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoryCarousal
