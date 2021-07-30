import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import LongLogo from '../../assets/img/Logos/long-logo.png';
import { Link as RouterLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from './../../redux/actions/userActions';
import jwt from "jsonwebtoken";

// * STYLES *
import useStyles from './DashboardStyle';



function Dashboard(props) {
  const dispatch = useDispatch();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { state, user } = useSelector((state) => state.users);
  const token = localStorage.getItem('jwt')
  const User = jwt.decode(token)

  useEffect(() => {
    dispatch(getUser(token))
  }, [state])

  const handleClick = () => {
    dispatch(logout());
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!user) return <Redirect to='/' />
  if(user.passwordReset) return <Redirect to='/users/password-reset' />

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText primary="Ir a la tienda" />
        </ListItem>
        <ListItem button component={RouterLink} to="/users/me/favorites">
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favoritos" />
        </ListItem>
        <ListItem button component={RouterLink} to="/users/me/shopping">
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Mis compras" />
        </ListItem>
        <ListItem button component={RouterLink} to="/users/me/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
        <ListItem button component={RouterLink} to="/products" onClick={handleClick} className={classes.exitClient}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesión" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    {!User.isadmin ?
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Link component={RouterLink} to="/">
            <img src={LongLogo} className={classes.image} alt="Pillow Top" />
          </Link>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
    : <Redirect to='/admin/dashboard' />}
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
