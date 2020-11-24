import React from 'react'
import {TextField,Button,Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';


const useStyles = makeStyles({
    root: {
      marginTop:"5rem",
    },
  });

function Signup() {
    const formik = useFormik({
        initialValues: {
            displayName: "",
            email: '',
            password: "",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}><TextField label="Display Name" variant="outlined" onChange={formik.handleChange} value={formik.values.displayName} id="displayName" name="displayName" fullWidth /></Grid>
                    <Grid item xs={12}><TextField label="Email" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.email} id="email" name="email" /></Grid>
                    <Grid item xs={12}><TextField label="Password" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.password} id="password" name="password" /></Grid>
                    <Grid item xs={12}><Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button></Grid>
                    <Grid item xs={12}><Button variant="contained" color="primary" fullWidth>SignUp with Google</Button></Grid>
                </Grid>
           </form>
        </Container>
    )
}

export default Signup
