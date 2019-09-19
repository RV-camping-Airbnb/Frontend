import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RVOne from '../../images/rv1.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        RVNB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${RVOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpForm({ values, errors, touched, isSubmitting }) {
  const [users, setUsers] = useState([])
  console.log(users)
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Form>
            {touched.fname && errors.fname && <p className="error"> {errors.fname}</p>}
            <TextField 
              type="fname" 
              name="fname" 
              label="First Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              autoFocus
            />
            {touched.lname && errors.lname && <p className="error"> {errors.lname}</p>}
            <TextField 
              type="lname" 
              name="lname" 
              label="Last Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              autoFocus 
            />
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            {touched.rvowner && errors.rvowner && <p className="error">{errors.rvowner}</p>}
            <FormControlLabel
              control={<Checkbox value="rvowner" color="primary" />}
              label="RV Owner" 
              name="rvowner" 
            />
            {touched.landowner && errors.landowner && <p className="error">{errors.landowner}</p>}
             <FormControlLabel
              control={<Checkbox value="landowner" color="primary" />}
              label="Land Owner"
              name="landowner" 
            />
            <Button 
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/login' variant="body2">
                  {"Already have an account? Login!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}

export default withFormik({
  mapPropsToValues({ fname, lname, email, password, landowner, rvowner }) {
    
    return {
      fname: fname || "",
      lname: lname || "",
      email: email || "",
      password: password || "",
      landowner: landowner || false,
      rvowner: rvowner || false,
    };
  },

  validationSchema: Yup.object().shape({
    fname: Yup.string().required()
      .min(3,"First name is not valid")
      .required("First name is required"),
    lname: Yup.string().required()
      .min(3,"Last name is not valid")
      .required("Last name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    landowner: Yup.boolean().oneOf([ true ], "Please check if you are a land owner"),
    rvowner: Yup.boolean().oneOf([ true ], "Please check if you are an RV ownver"),
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  }

})(SignUpForm);