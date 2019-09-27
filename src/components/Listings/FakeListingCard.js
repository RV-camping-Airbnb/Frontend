import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '80%',
    height: '500px',
    backgroundColor: 'white',
    padding: theme.spacing(3, 2),
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto 0',
    width: '80%',
    padding: '1%'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '80%',
    padding: '0 1%',
    cursor: 'pointer',
  },
  favContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '1% auto',
    width: '100%',
    padding: '1%',
    boxShadow: '1px 3px 5px'
  },
  heading: {
    fontSize:'1.6rem',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const FakeListingCard = (props) => {
  const classes = useStyles();
  const shareURL = 'https://rvnb.netlify.com/'
  console.log(props)
  console.log(props.post)
  
  return (
      <div>
        <div>
          <Paper className={classes.example}>
            <h1 className={classes.heading}>Listing:</h1>
            <Grid container wrap="wrap" className={classes.grid}>
              <Box key={props.post.id} className={classes.favContent}>
                {props.post ? (
                  <img className={classes.image} alt={props.post.title} src={props.post.img} />
                ) : (
                  <Skeleton variant="rect" width={220} height={120} />
                )}

                {props.post ? (
                  <Box paddingRight={2} className={classes.favContent}>
                    <Typography gutterBottom variant="body2">
                      {props.post.title}
                    </Typography>
                    <Typography display="block" variant="caption" color="textSecondary">
                      {props.post.address}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {`${props.post.state} • ${props.post.price}`}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {props.post.description}
                    </Typography>
                    <Rating name="half-rating" value={4.5} precision={0.5} />
                    <div>
                      <button aria-label="add to booked" onClick={() => props.addToBooked(props.post)}>
                        BOOK
                      </button>
                      <IconButton aria-label="share">
                        <TwitterShareButton url={shareURL}>
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                      </IconButton>
                    </div>
                  </Box>
                ) : (
                  <React.Fragment>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </React.Fragment>
                )}
              </Box>
            </Grid>
          </Paper>
        </div>
    </div>
  );
}

export default FakeListingCard;