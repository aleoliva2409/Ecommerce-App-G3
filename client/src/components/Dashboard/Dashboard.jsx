import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Divider, Drawer, Hidden, IconButton, Link, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';
import useStyles from './DashboardStyle';
import LongLogo from '../../assets/img/Logos/long-logo.png';
import { Link as RouterLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from './../../redux/actions/userActions';
import jwt from "jsonwebtoken";



function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { state } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const token = localStorage.getItem('jwt')
  const user = jwt.decode(token)

  useEffect(() => {
    dispatch(getUser(token))
  }, [state,dispatch,token])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    dispatch(logout());
  };

  if (!user) return <Redirect to='/' />
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Ir a la tienda" />
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/dashboard/products">
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/dashboard/orders">
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Ordenes" />
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/dashboard/categories">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categorias" />
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/dashboard/promote">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
        <ListItem button component={RouterLink} to="/" onClick={handleClick} className={classes.exitClient}>
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
      {user.isadmin ?
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
        :
        <Redirect to='/users/me' />}
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
