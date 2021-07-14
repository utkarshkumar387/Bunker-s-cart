import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        color: '#fff',
    },
    brandName: {
        fontSize: '28px',
        fontFamily: 'Reggae One, cursive',
        color: '#0BDA51',

    },
    loginButton: {
        marginLeft: '20px',
    }
}))
