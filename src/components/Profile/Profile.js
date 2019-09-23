import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Favorites from './Favorites';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0 auto',
    width: '80%',
    height: '500px',
    backgroundColor: 'lightblue',
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
    border: '2px solid black',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));



function Profile() {
  const classes = useStyles();

  return (
    <>
    <Paper className={classes.root}>
      <Paper className={classes.bio}>
        <Avatar alt="Nick Durbin" src="" className={classes.bigAvatar} />
        <h1>Nick Durbin</h1>
        <h3>Akron, Ohio</h3>
        <h4>RV Owner</h4>
        <h4>Land Owner</h4>
        <Rating name="half-rating" value={4.5} precision={0.5} />
      </Paper>
    </Paper>
    <Favorites />
    </>
  )
}

export default Profile;