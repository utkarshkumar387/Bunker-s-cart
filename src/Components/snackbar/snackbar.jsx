import React, { useReact } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

// function TransitionUp(props) {
//     return <Slide {...props} direction="up" />;
// }

export default function DirectionSnackbar({ openSnackbar, transition, onSnackbarHandleClose, productName }) {
    // const [openSnackbar, setOpenSnackbar] = React.useState(false);
    // const [transition, setTransition] = React.useState(undefined);

    // const snackbarHandleClick = () => {
    //     setTransition(() => TransitionUp);
    //     setOpenSnackbar(true);
    // };

    // const snackbarHandleClose = () => {
    //     setOpenSnackbar(false);
    // };

    return (
        <div>
            <Snackbar
                open={openSnackbar}
                onClose={() => onSnackbarHandleClose()}
                TransitionComponent={transition}
                message={`${productName} added to cart.`}
                key={transition ? transition.name : ''}
            />
        </div>
    );
}
