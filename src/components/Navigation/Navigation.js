import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ViewListIcon from '@material-ui/icons/ViewList';
import SendIcon from '@material-ui/icons/Send';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import RvHookupIcon from '@material-ui/icons/RvHookup';

const drawerWidth = 240;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    toolBar: {
      color: 'black',
    },
    menuButton: {
      height: '40px',
      width: '50px',
    },
    menuLink: {
      display: 'flex',
    },
    menuText: {
      marginLeft: '25px'
    }
  }));

function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}>
          <Toolbar className={classes.toolBar}>
            <IconButton 
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon className={classes.menuButton}/>
            </IconButton>
          </Toolbar>
        </div>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <NavLink to='/' className={classes.menuLink}>
              <HomeIcon />
              <ListItemText className={classes.menuText}>
                Home
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/profile' className={classes.menuLink}>
              <PersonIcon />
              <ListItemText className={classes.menuText}>
                Profile
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/favorites' className={classes.menuLink}>
              <FavoriteIcon />
              <ListItemText className={classes.menuText}>
                Favorites
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/listings' className={classes.menuLink}>
              <ViewListIcon />
              <ListItemText className={classes.menuText}>
                Listings
              </ListItemText>
            </NavLink>
          </ListItem >
        </List>
        <Divider />
        <List>
          <ListItem button>
           <NavLink to='/sendmessage' className={classes.menuLink}>
             <SendIcon />
             <ListItemText className={classes.menuText}>
               Send Message
             </ListItemText>
           </NavLink>
         </ListItem>
         <ListItem button>
           <NavLink to='/signup' className={classes.menuLink}>
             <RvHookupIcon />
             <ListItemText className={classes.menuText}>
               Sign-Up
             </ListItemText>
           </NavLink>
         </ListItem>
         <ListItem button>
           <NavLink to='/login' className={classes.menuLink}>
             <LockOpenIcon />
             <ListItemText className={classes.menuText}>
               Login
             </ListItemText>
           </NavLink>
         </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navigation;