import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShortLogo from './../../assets/img/Logos/short-logo.png';
import LongLogo from './../../assets/img/Logos/long-logo.png';
import SearchBar from './SearchBar/SearchBar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useMediaQuery } from '@material-ui/core';
import {useStyles} from './Styles';
import { useSelector } from 'react-redux';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const isPhone = useMediaQuery('(max-width: 760px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const cartItemsBadge = useSelector((state) => state.cart.productsOnCart.length)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
       <Link component={RouterLink} to="/admin"  className={classes.links}>
          <MenuItem onClick={handleMenuClose}>Agregar producto</MenuItem>
       </Link>
       <Link component={RouterLink} to="/categories"  className={classes.links}>
          <MenuItem onClick={handleMenuClose}>Agregar categoria</MenuItem>
       </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}

      onClose={handleMobileMenuClose}
    >
       <Link component={RouterLink} to="/products"  className={classes.links}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
          <p>Catálogo</p>
        </MenuItem>
      </Link>

      <Link component={RouterLink} to="/cart"  className={classes.links}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Carrito</p>
        </MenuItem>
      </Link>

      <Link component={RouterLink} to="#" className={classes.links}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <p>Favoritos</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar className={classes.appbar}>

            <Link component={RouterLink} to="/">
                {isPhone ?
                <img src={ShortLogo} className={classes.imageShort} alt="Pillow Top" /> :
                <img src={LongLogo} className={classes.image} alt="Pillow Top" />
                }
            </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}> <SearchIcon /> </div>
            {/* Done Search   */}
            <SearchBar />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link component={RouterLink} to="/products"  className={classes.linkDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link component={RouterLink} to="/cart" className={classes.linkDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={cartItemsBadge} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link component={RouterLink} to="#" className={classes.linkDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link component={RouterLink} to="#" className={classes.linkDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
