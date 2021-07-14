import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        minWidth: 80,
        background: {
            default: "#fafafa"
        },
        "&:hover": {
            boxShadow: '0 0 11px rgba(33,33,33,.2)',
        }

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))