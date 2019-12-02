import React from 'react';
import s from '../MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
 
import { makeStyles } from '@material-ui/core/styles';  import Grid from '@material-ui/core/Grid'; 

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

const AddPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Grid>
                    <Field component={"textarea"} name="postText"/>
                </Grid>
                <Grid>
                    <button>Add post</button>
                </Grid>
            </form>
    )
}

export default reduxForm({form: 'profile-add-post'})(AddPostForm)
