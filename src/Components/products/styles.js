import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
    },
    headerInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    categoryBox: {
        backgroundColor: '#fff',
    }
}))