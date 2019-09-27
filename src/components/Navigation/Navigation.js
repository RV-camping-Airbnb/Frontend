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
import LockIcon from '@material-ui/icons/Lock';
import RvHookupIcon from '@material-ui/icons/RvHookup';
import RVNBIcon from '../../images/RVNBIcon.svg';

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
    },
    icon: {
      display: 'flex',
      marginLeft: '3%',
      width: '200px',
      ['@media (max-width:400px)']: { 
        width: '150px',
      },

      '&:a': {
        marginLeft: '3%',
        width: '200px',
        ['@media (max-width:400px)']: { 
        width: '150px',
        }
      }
    },
    links: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textDecoration: 'none',
      width: '35%',
      color: 'black',
      fontSize: '1rem',
      marginRight: '2%',
      ['@media (max-width:1000px)']: { 
        display: 'none',
      },

      '&:a': {
        paddingRight: '2%',
        marginRight: '2%',
        cursor: 'pointer',
        ['@media (max-width:1000px)']: { 
          display: 'none',
        },
      },
    },
  }));

function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  console.log(props)

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem('token'); 
  }

  return (
    <div className={classes.root}>
      <NavLink to='/' className={classes.icon}>
        <img className={classes.icon} src={RVNBIcon} alt='Icon' />
      </NavLink>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}>
        <div className={classes.links}>
          <NavLink to='/'>
            Home
          </NavLink>
          <a href='https://rvnb-marketing.netlify.com/' target="_blank" rel="noopener noreferrer">
            Marketing
          </a>
          <NavLink to='/login'>
            Login
          </NavLink>
        </div>
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
            <NavLink to='/' className={classes.menuLink} onClick={handleDrawerClose}>
              <HomeIcon />
              <ListItemText className={classes.menuText}>
                Home
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/profile' className={classes.menuLink} onClick={handleDrawerClose}>
              <PersonIcon />
              <ListItemText className={classes.menuText}>
                Profile
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/favorites' className={classes.menuLink} onClick={handleDrawerClose}>
              <FavoriteIcon />
              <ListItemText className={classes.menuText}>
                Favorites
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/booking' className={classes.menuLink} onClick={handleDrawerClose}>
              <FavoriteIcon />
              <ListItemText className={classes.menuText}>
                Booking
              </ListItemText>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/listingss' className={classes.menuLink} onClick={handleDrawerClose}>
              <ViewListIcon />
              <ListItemText className={classes.menuText}>
                Listings
              </ListItemText>
            </NavLink>
          </ListItem >
          <ListItem button>
            <NavLink to='/createlisting' className={classes.menuLink} onClick={handleDrawerClose}>
              <ViewListIcon />
              <ListItemText className={classes.menuText}>
                Create Listing
              </ListItemText>
            </NavLink>
          </ListItem >
          <ListItem button>
            <NavLink to='/listings' className={classes.menuLink} onClick={handleDrawerClose}>
              <ViewListIcon />
              <ListItemText className={classes.menuText}>
                Fake Posts
              </ListItemText>
            </NavLink>
          </ListItem >
        </List>
        <Divider />
        <List>
          <ListItem button>
           <NavLink to='/messenger' className={classes.menuLink} onClick={handleDrawerClose}>
             <SendIcon />
             <ListItemText className={classes.menuText}>
               Messenger
             </ListItemText>
           </NavLink>
         </ListItem>
         <ListItem button>
           <NavLink to='/signup' className={classes.menuLink} onClick={handleDrawerClose}>
             <RvHookupIcon />
             <ListItemText className={classes.menuText}>
               Sign-Up
             </ListItemText>
           </NavLink>
         </ListItem>
         <ListItem button>
           <NavLink to='/login' className={classes.menuLink} onClick={handleDrawerClose}>
             <LockOpenIcon />
             <ListItemText className={classes.menuText}>
               Login
             </ListItemText>
           </NavLink>
         </ListItem>
         <ListItem button onClick={handleLogout}>
           <NavLink to='/login' className={classes.menuLink} onClick={handleDrawerClose}>
            <LockIcon />
            <ListItemText className={classes.menuText}>
              Logout
            </ListItemText>
          </NavLink>
         </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navigation;