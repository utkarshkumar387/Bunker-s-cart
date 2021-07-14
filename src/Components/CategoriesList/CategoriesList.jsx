import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import fruits from '../../images/fruits.jpg';
import vegetables from '../../images/vegetables.jpg';
import spices from '../../images/spices.jpg';
import dairy from '../../images/dairy.jpg';

const images = [
    {
        url: fruits,
        title: 'Fruits',
        width: '25%',
    },
    {
        url: vegetables,
        title: 'Vegitables',
        width: '25%',
    },
    {
        url: spices,
        title: 'Spices',
        width: '25%',
    },
    {
        url: dairy,
        title: 'Milk and Dairy',
        width: '25%',
    },
];

const useStyles = makeStyles((theme) => ({
    productCategories: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '95%',
    },
    image: {
        position: 'relative',
        height: 120,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

function CategoriesList() {
    const classes = useStyles();

    return (
        <div className={classes.productCategories}>
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width, height: image.height,
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`, height: image.height
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {image.title}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
        </div>
    );
}

export default CategoriesList;
