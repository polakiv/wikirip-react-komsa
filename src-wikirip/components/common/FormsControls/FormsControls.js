import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
 
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

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <Grid className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Grid>
                {children}
            </Grid>
            {hasError && <span>{error}</span>}
        </Grid>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <Grid>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </Grid>
)