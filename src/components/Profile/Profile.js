import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
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
    border: '2px solid black',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto',
    width: '80%',
    padding: '1%'
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    padding: '1%'
  },
  favContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto',
    width: '100%',
    padding: '1%'
  },
  heading: {
    fontSize:'1.6rem',
    margin: '0 auto'
  },
}));

const data = [
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property One',
    location: 'San Jose, CA',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Two',
    location: 'Paris, France',
    views: '2.1 M views',
    createdAt: '4 months ago',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Three',
    location: 'Tampa, FL',
    views: '130 M views',
    createdAt: '10 months ago',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property One',
    location: 'San Jose, CA',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Two',
    location: 'Paris, France',
    views: '2.1 M views',
    createdAt: '4 months ago',
  },
];

function Profile(props) {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <>
    <Paper className={classes.root}>
      <Paper className={classes.bio}>
        <Avatar alt="Nick Durbin" src="" className={classes.bigAvatar} />
        <h1>Nick Durbin</h1>
        <h3>Akron, Ohio</h3>
        <Rating name="half-rating" value={4.5} precision={0.5} />
      </Paper>
    </Paper>
    <Paper className={classes.example}>
    <h1 className={classes.heading}>Favorite Properties</h1>
    <Grid container wrap="nowrap" className={classes.grid}>
    {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
      <Box key={index} width={260} margin={1} my={5}>
        {item ? (
          <img style={{ width: 220, height: 140 }} alt={item.title} src={item.src} />
        ) : (
          <Skeleton variant="rect" width={260} height={140} />
        )}

        {item ? (
          <Box paddingRight={2} className={classes.favContent}>
            <Typography gutterBottom variant="body2">
              {item.title}
            </Typography>
            <Typography display="block" variant="caption" color="textSecondary">
              {item.location}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {`${item.views} • ${item.createdAt}`}
            </Typography>
            <Rating name="half-rating" value={4.5} precision={0.5} />
          </Box>
        ) : (
          <React.Fragment>
            <Skeleton />
            <Skeleton width="60%" />
          </React.Fragment>
        )}
      </Box>
      ))}
    </Grid>
  </Paper>
  </>
  )
}

export default Profile