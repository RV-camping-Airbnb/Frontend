import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField } from 'formik-material-ui';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RVOne from '../../images/rv1.jpg';
import { axiosWithoutAuth as axios } from '../../utils/axiosutils';

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
  dropdown: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    height: '55px',
    borderRadius: '5px',
    paddingLeft: '10px',
    fontSize: '1rem'
  }
}));

function SignUpForm(props) {
  const [users, setUsers] = useState([])
  const classes = useStyles();

  const forwardUser = () => {(props.history.push('/'))};

  useEffect(() => {
    if (props.status) {
      setUsers([ ...users, props.status ])
      forwardUser();
    }
    console.log(users)
  }, [props.status, users])

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
            <Field 
              type="text" 
              name="first_name" 
              label="First Name"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first_name"
            />
            <Field 
              type="text" 
              name="last_name" 
              label="Last Name"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last_name"
            />
            <Field
              type="email"
              name="email"
              component={TextField}
              id="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
            />
             <Field 
              type="text" 
              name="username" 
              label="Username"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
            />
            <Field
              name="password"
              type="password"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              id="password"
            />
            {props.touched.member && props.errors.member && <p className="error">{props.errors.member}</p>}
            <Field className={classes.dropdown} component="select" name="member">
              <option value="" disabled>Select Account Type *</option>
              <option value="false">RV Owner</option>
              <option value="true">Land Owner</option>
            </Field>
            <Button 
              disabled={props.isSubmitting}
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
                <Link to='/reset-password' variant="body2">
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
  mapPropsToValues({ first_name, last_name, email, username, password, member }) {
    
    return {
      first_name: first_name || "",
      last_name: last_name || "",
      email: email || "",
      username: username || "",
      password: password || "",
      member: member || ""
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string()
      .min(3,"First name is not valid")
      .required("First name is required"),
    last_name: Yup.string()
      .min(3,"Last name is not valid")
      .required("Last name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    username: Yup.string()
      .min(3,"Username is not valid")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    member: Yup.string()
      .required("Please select a member type.")
  }),

  handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    axios()
    .post('/register', values)
    .then(res => {
      setStatus(res.data)
      localStorage.setItem('token', res.data.token)
      console.log(res.data, 'User has been added to the database!');
      resetForm();
      setSubmitting(false);
    })
    .catch(err => {
      console.log(err.res, 'Failed to add new user to the database!');
      setSubmitting(false);
    })
  }

})(SignUpForm);