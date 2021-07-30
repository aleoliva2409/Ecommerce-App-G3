import React, { useEffect, useState } from "react";
import { AppBar, Badge, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
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
import jwt from 'jsonwebtoken';

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();

  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector(state => state.color)
  if (actualColor) {
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('loginGoogle')) {
      const token = url.split('=')[2].split('#')[0];
      window.localStorage.setItem('jwt', token)
      window.localStorage.setItem('user', jwt.decode(token).email)
      window.location.replace('/')
    }
  }, [])

  const isPhone = useMediaQuery("(max-width: 760px)");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const inLocal = useSelector((state) => state.cart.items);
  const cartItemsBadge = inLocal.reduce((acc, crr) => acc + crr.qty, 0);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


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
      className={classes.mobileMenu}
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

      <Link component={RouterLink} to="/favorites" className={classes.links}>
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
      <MenuItem>
        <AccountCircle />
        <ValuesAccount />
        <p>Cuenta</p>
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
          <div className={classes.grow} />
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
            {color ?
              <IconButton color="inherit"
                onClick={clickColor}>
                <Brightness3Icon />
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

            <Link component={RouterLink} to="/favorites" className={classes.linkDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <FavoriteIcon />
                </Badge>
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
    </div>
  );
}
