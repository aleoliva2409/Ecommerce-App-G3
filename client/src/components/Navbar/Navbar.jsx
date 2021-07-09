import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LongLogo from "./../../assets/img/Logos/long-logo.png";
import ShortLogo from "./../../assets/img/Logos/short-logo.png";

import SearchBar from "../SearchBar/SearchBar";

// * STYLES *
import { useStyles } from "./Styles";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/products" className={classes.iconLink}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
          <p>Catalogue</p>
        </MenuItem>
      </Link>
      <Link to="#" className={classes.iconLink}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
      <Link to="#" className={classes.iconLink}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
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
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.appbar}>
          <Link to="/">
            <img
              src={LongLogo}
              className={classes.imageDesktop}
              alt="Pillow Top"
            />
          </Link>
          {/*  <Link to="/">
            <img
              src={ShortLogo}
              className={classes.imageMobile}
              alt="Pillow Top"
            />
          </Link> */}
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {/* Done Search   */}
            <SearchBar />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/products" className={classes.iconLink}>
              <IconButton color="inherit">
                <ShoppingBasketIcon />
              </IconButton>
            </Link>
            <Link to="#" className={classes.iconLink}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="#" className={classes.iconLink}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
