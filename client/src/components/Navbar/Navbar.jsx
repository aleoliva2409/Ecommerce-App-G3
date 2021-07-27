import React, { useState } from "react";
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
import ShortLogo from "./../../assets/img/Logos/short-logo.png";
import LongLogo from "./../../assets/img/Logos/long-logo.png";
import SearchBar from "./SearchBar/SearchBar";
import ValuesAccount from "../Account/ValuesAccount";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Styles";
import { useStylesDark } from "./StyleDark";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/actions/colorModeActions";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();

  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector(state => state.color)
  console.log(actualColor)
  if(actualColor){
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  const isPhone = useMediaQuery("(max-width: 760px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const inLocal = useSelector((state) => state.cart.items);
  const cartItemsBadge = inLocal.reduce((acc, crr) => acc + crr.qty, 0);

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
      <Link
        component={RouterLink}
        to="/admin/dashboard"
        className={classes.links}
      >
        <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
      </Link>
      <Link component={RouterLink} to="/categories" className={classes.links}>
        <MenuItem onClick={handleMenuClose}>Agregar categoria</MenuItem>
      </Link>
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
      <Link component={RouterLink} to="/products" className={classes.links}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
          <p>Catálogo</p>
        </MenuItem>
      </Link>

      <Link component={RouterLink} to="/cart" className={classes.links}>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={cartItemsBadge} color="secondary">
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
     {/* should be see only when is logged  */}
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
      {/* should be see only when is logged  */}
      <MenuItem>
        <ValuesAccount />
      </MenuItem>
    </Menu>
  );

  const [color, setColor] = useState(JSON.parse(localStorage.getItem("color")));

  const clickColor = () => {
    if (color) {
      localStorage.setItem("color", JSON.stringify(false));
      setColor(JSON.parse(localStorage.getItem("color")));
    } else {
      localStorage.setItem("color", JSON.stringify(true));
      setColor(JSON.parse(localStorage.getItem("color")));
    }
    dispatch(changeColor(JSON.parse(localStorage.getItem("color"))))
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.appbar}>
          <Link component={RouterLink} to="/">
            {isPhone ? (
              <img
                src={ShortLogo}
                className={classes.imageShort}
                alt="Pillow Top"
              />
            ) : (
              <img src={LongLogo} className={classes.image} alt="Pillow Top" />
            )}
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {" "}
              <SearchIcon />{" "}
            </div>
            {/* Done Search   */}
            <SearchBar />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
{ color?
            <IconButton color="inherit"
            onClick={clickColor}>
              <Brightness3Icon/>
            </IconButton>
            :
            <IconButton color="inherit"
            onClick={clickColor}>
              <WbSunnyIcon />
            </IconButton>
}
            <Link
              component={RouterLink}
              to="/products"
              className={classes.linkDesktop}
            >
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link
              component={RouterLink}
              to="/cart"
              className={classes.linkDesktop}
            >
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

             {/* should be see only when is logged  */}
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
            {/* should be see only when is logged  */}

            <ValuesAccount className={classes.linkDesktop} />
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
