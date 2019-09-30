import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const Favorites = (props) => {
  const classes = useStyles();
  console.log(props.favoriteList)
  const shareURL = 'https://rvnb.netlify.com/'
  
  return (
    <div className="saved-list">
        <div>
          <Paper className={classes.example}>
            <h1 className={classes.heading}>Search by location:</h1>
            <input label='Search by location' icon="search" onChange={onchange} />
            <Grid container wrap="wrap" className={classes.grid}>
            {props.favoriteList.map((post, index) => (
             
              <Box key={index} width={220} margin={1} my={5} className={classes.image}>
                {post ? (
                  <img style={{ width: 220, height: 140 }} alt={post.title} src={post.img} />
                ) : (
                  <Skeleton variant="rect" width={220} height={120} />
                )}

                {post ? (
                  <Box paddingRight={2} className={classes.favContent}>
                    <Typography gutterBottom variant="body2">
                      {post.title}
                    </Typography>
                    <Typography display="block" variant="caption" color="textSecondary">
                      {post.address}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {`${post.price} per night`}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {`Available from ${post.start_date} to ${post.end_date}`}
                    </Typography> 
                    <Rating name="half-rating" value={4.5} precision={0.5} />
                    <Typography variant="caption" color="textSecondary">
                     {post.description}
                    </Typography>
                    <div>
                      <IconButton onClick={() => props.deleteFavorite(post.id)}>
                        <DeleteIcon />
                      </IconButton>
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
              ))}
            </Grid>
          </Paper>
        </div>
    </div>
  );
}

export default Favorites;