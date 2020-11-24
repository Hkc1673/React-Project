import React from 'react'
import {TextField,Button,Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      marginTop:"5rem",
    },
  });

function Signup() {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12}><TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth /></Grid>
                <Grid item xs={12}><TextField id="outlined-basic" label="Email" variant="outlined" fullWidth /></Grid>
                <Grid item xs={12}><TextField id="outlined-basic" label="Password" variant="outlined" fullWidth /></Grid>
                <Grid item xs={12}><Button variant="contained" color="primary" fullWidth>Submit</Button></Grid>
                <Grid item xs={12}><Button variant="contained" color="primary" fullWidth>SignUp with Google</Button></Grid>
           </Grid>
        </Container>
    )
}

export default Signup
