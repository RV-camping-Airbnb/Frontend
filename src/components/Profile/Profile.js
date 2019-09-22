import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    width: '80%',
    height: '500px',
    padding: theme.spacing(3, 2),
  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    height: '95%',
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    border: '2px solid black'
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Paper className={classes.bio}>
        <Avatar alt="Nick Durbin" src="" className={classes.bigAvatar} />
        <h1>Nick Durbin</h1>
        <h3>Akron, Ohio</h3>
        <Rating name="half-rating" value={4.5} precision={0.5} />
      </Paper>
    </Paper>
  )
}

export default Profile