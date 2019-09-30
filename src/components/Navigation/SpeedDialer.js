import clsx from 'clsx';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinIcon, LinkedinShareButton } from 'react-share';

const useStyles = makeStyles(theme => ({
  root: {
   width: '100%'
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'fixed',
    '&$directionLeft': {
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  directionLeft: {},
}));

const shareURL = 'https://rvnb.netlify.com/'

const actions = [
  { icon: <FacebookShareButton url={shareURL}> <FacebookIcon size={32} round={true} /> </FacebookShareButton>, name: 'Share' },
  { icon: <TwitterShareButton url={shareURL}> <TwitterIcon size={32} round={true} /> </TwitterShareButton>, name: 'Share' },
  { icon: <LinkedinShareButton url={shareURL}> <LinkedinIcon size={32} round={true} /> </LinkedinShareButton>, name: 'Share' },
];

export default function SpeedDialer() {
  const classes = useStyles();
  const [direction] = useState('left');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const speedDialClassName = clsx(classes.speedDial, classes[`direction${capitalize(direction)}`]);

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="RVNB Actions"
        className={speedDialClassName}
        icon={<SpeedDialIcon />}
        onBlur={handleClose}
        onClick={handleClick}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        open={open}
        direction={direction}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClick}
          />
        ))}
      </SpeedDial>
    </div>
  );
}