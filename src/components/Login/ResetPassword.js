import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0 auto',
    width: '40%',
    height: '500px',
  },
  content: {
    padding: '1% 20%'
  },
  header: {
    margin: '1% auto',
    fontSize: '3rem',
    textAlign: 'center'
  },
  line: {
    width: '10%',
    border: '3px solid #ff3366',
  },
  para: {
    fontSize: '1rem',
    textAlign: 'center',
    color: 'gray',
  },
  textField: {
    width: '80%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    color: '#fff',
    backgroundColor: '#ff3366',
    width: '80%',
    height: '55px',
    fontSize: '1rem',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#fc003f',
    }
  },
}));

function ResetPassword() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.header}>FORGOT YOUR PASSWORD?</h1>
        <hr className={classes.line}/>
        <p className={classes.para}>Enter your email address below and we'll send you a link to reset your password.</p>
      </div>
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        required
      />
      <Button variant="contain" color="secondary" className={classes.button}>
        Reset Password
      </Button>
    </Paper>
  )
}

export default ResetPassword;