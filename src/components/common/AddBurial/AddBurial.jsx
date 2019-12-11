import React, { useState } from 'react'; 
import cn from "classnames";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
//import Autocomplete from '@material-ui/lab/Autocomplete';

import CircularProgress from '@material-ui/core/CircularProgress';
function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  textField: {
    margin: 'auto',
    width: '100%',
    float: 'left',
    maxWidth: 500,
  },
}));

let AddBurial = ({ totalItemsCount, onBurialChanged }) => { // onBurialChanged приходит сюда в пропсах  и экспортируется через jsx в другие файлы...

  const classes = useStyles();

  let onNewBurialChange = (elc) => {
 
    let body1 = elc.target.value; 
	  //debugger;
   // onBurialChanged(body);
  }
   	
  return <Grid className='AddBurial_AddBurial'>
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid className="jkl"> 
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Введите фамилию, имя, местоположение"
            margin="normal"

            onChange={onNewBurialChange}

            variant="outlined"
          ></TextField>
		   <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Добавить
          </Button>
        </Grid>
      </form>
    </Paper> 
  </Grid>
}

export default AddBurial;