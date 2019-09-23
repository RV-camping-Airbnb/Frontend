import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

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
  example: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto 0',
    width: '80%',
    height: '425px',
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
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const data = [
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property One',
    location: 'San Jose, CA',
    views: '396 k views',
    createdAt: 'a week ago',
    isFavorited: false
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Two',
    location: 'Paris, France',
    views: '2.1 M views',
    createdAt: '4 months ago',
    isFavorited: false
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Three',
    location: 'Tampa, FL',
    views: '130 M views',
    createdAt: '10 months ago',
    isFavorited: false
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Four',
    location: 'Lake Tahoe, CA',
    views: '112 k views',
    createdAt: 'a week ago',
    isFavorited: false
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Property Five',
    location: 'Dallas, TX',
    views: '112 views',
    createdAt: '4 hours ago',
    isFavorited: false
  },
];

const Favorites = (props) => {
  const [listing, setListing] = useState(data);
  const classes = useStyles();
  const [favoriteList, setFavoriteList] = useState(data);
  const [className, setClassName] = useState();
  console.log(data)

  const addToFavoritesList = listing => {
    const present = favoriteList.find(el => el.title === listing.title)
    if (!present) {
      setFavoriteList( [...favoriteList, listing] );
    } 
  };

  const saveListing = (item) => {
    // if (item.isFavorited === !true)
    // addToFavoritesList(listing);
    console.log(item)
  }

  return (
    <div className="saved-list">
      {favoriteList.map(listing => (
        <div>
          <Paper className={classes.example}>
            <h1 className={classes.heading}>Favorite Listings:</h1>
            <Grid container wrap="nowrap" className={classes.grid}>
            {data.map((item, index) => (
             
              <Box key={index} width={260} margin={1} my={5} className={classes.image}>
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
                    <div>
                      <IconButton aria-label="add to favorites" className={item.isFavorited && classes.colorSecondary} onClick={() => saveListing()}>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
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
              ))}
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
}

export default Favorites;