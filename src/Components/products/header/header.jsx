import React from 'react';
import makeStyles from './styles';
import Typography from '@material-ui/core/Typography';

function Header({ headerCategory, headerSubcategory }) {
    const classes = makeStyles();
    return (
        <div>
            <div className={classes.headerInner}>
                <Typography variant="h4"><b>{headerCategory}</b></Typography>
                <Typography variant="subtitle2" color='textSecondary'>{headerSubcategory}</Typography>
                <hr style={{ display: 'flex', justifyContent: 'center', width: '60%', marginTop: '8px', backgroundColor: '#0BDA51' }} />
            </div>
        </div>
    )
}

export default Header
