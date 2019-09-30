import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { TwitterShareButton, FacebookShareButton, FacebookIcon, TwitterIcon } from 'react-share';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '50%',
    height: '400px',
    backgroundColor: 'white',
    padding: theme.spacing(3, 2),
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto 0',
    width: '50%',
    padding: '1%'
  },
  grid: {
    display: 'flex',
    flexDrection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto',
    width: '50%',
    padding: '0 1%',
    cursor: 'pointer',
  },
  imgContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '1% auto',
    width: '100%',
    boxShadow: '1px 3px 5px',
    overflow: 'hidden'
  },
  desContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '1% auto 0',
    padding: '1%',
    width: '100%',
    boxShadow: '1px 3px 5px',
  },
  heading: {
    fontSize:'1.6rem',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    transition: '5s',
    '&:hover': {
      transform: 'scale(1.4)',
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    margin: '1% 3%',
    padding: '0 5%'
  },
  bookButton: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    width: '30%',
    height: '45px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  
    '&:hover': {
      backgroundColor: '#052af7',
      transform: 'scale(1.02)',
    }
  },
  favoriteButton: {
    color: '#fff',
    backgroundColor: '#ff3366',
    width: '30%',
    height: '45px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  
    '&:hover': {
      backgroundColor: '#fc003f',
      transform: 'scale(1.02)',
    }
  }
}));

const ListingCard = (props) => {
  const classes = useStyles();
  const shareURL = 'https://rvnb.netlify.com/'
  console.log(props.post, "I am in ListingCard.js")

  const bookListing = () => {
    const addToBookedList = props.addToBookedList;
    addToBookedList(props.post)
    console.log('Added to bookedList!')
  }

  const favoriteListing = () => {
    const addToFavoritesList = props.addToFavoritesList;
    addToFavoritesList(props.post)
  }
  
  return (
    <>
      <Grid container wrap="wrap" className={classes.grid}>
      <h1 className={classes.heading}>Listing: {props.post.address}</h1>
        <Box key={props.post.id} className={classes.imgContent}>
          {props.post ? (
            <img className={classes.image} alt={props.post.title} src={props.post.img} />
          ) : (
            <Skeleton variant="rect" width={220} height={120} />
          )}

          {props.post ? (
            <Box paddingRight={2} className={classes.desContent}>
              <Typography gutterBottom variant="body2">
                {props.post.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {props.post.address}
              </Typography>
              <Typography variant="caption" color="textSecondary">
              {`$${props.post.price} per night`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`Available from ${props.post.start_date} to ${props.post.end_date}`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.post.description}
              </Typography>
              <Rating name="half-rating" value={4.5} precision={0.5} />
              <div className={classes.buttons}>
                <button aria-label="add to booked" className={classes.bookButton} onClick={() => bookListing()}>
                  BOOK
                </button>
                <IconButton aria-label="share">
                  <TwitterShareButton url={shareURL}>
                    <TwitterIcon size={42} round={true} />
                  </TwitterShareButton>
                </IconButton>
                <IconButton aria-label="share">
                  <FacebookShareButton url={shareURL}>
                    <FacebookIcon size={42} round={true} />
                  </FacebookShareButton>
                </IconButton>
                <button aria-label="add to favorites" className={classes.favoriteButton} onClick={() => favoriteListing()}>
                  FAVORITE
                </button>
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
    </>
  );
}

export default ListingCard;