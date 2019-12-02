import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    }, 
}));

let Preloader = (props) => {
    return <Grid className='preload' style={{ backgroundColor: 'transparent' }, { width: '100%' }, { float: 'left' }, { position: "absolute" }, { zIndex: "999" }}>
    <img style={{ backgroundColor: 'transparent' }, { width: '42px' }, { margin: 'auto' }} src={preloader} />
</Grid>
}

export default Preloader;