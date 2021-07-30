import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, IconButton, Checkbox, Dialog, DialogContent, FormControlLabel, Grid, Link, Menu, MenuItem, TextField, Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MuiAlert from "@material-ui/lab/Alert";
import { Link as RouterLink } from "react-router-dom";
// * {Actions}
import { login, signup, logout } from "./../../redux/actions/userActions";

// * Style
import { useStyles } from "./AccountStyle";

export default function FormDialog({ field, setRegister, register }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [valuesForm, SetValuesForm] = useState({
    email: "",
    password: "",
    submitted: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const closeUser = () => dispatch(logout())

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = ( //! MENU MOBILE
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
        to="/users/me"
        className={classes.links}
      >
        <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
      </Link>
      <Link component={RouterLink} to="/" className={classes.links}>
        <MenuItem onClick={closeUser}>Cerrar Sesión</MenuItem>
      </Link>
    </Menu>
  );

  const message = useSelector((state) => state.users.message);

  const blockedUser = () => {
    return (
      <MuiAlert
        elevation={6}
        onClose={() => {
          dispatch(login("empty"));
        }}
        variant="filled"
        severity="error"
        color="error"
      >
        {message}
      </MuiAlert>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //onChange Handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValuesForm({ ...valuesForm, [name]: value });
  };

  //Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    SetValuesForm({ submitted: true });
    const { email, password } = valuesForm;
    //const { dispatch } = this.props;
    if (email && password && !register) {
      dispatch(login({ email, password }));
    }
    if (email && password && register) {
      dispatch(signup({ email, password, isadmin: false }));
    }
  };

  if (localStorage.getItem("user")) {
    return (
      <>
        <IconButton variant="text" onClick={handleProfileMenuOpen} className={classes.button}>
          <AccountCircle />
        </IconButton>
        {renderMenu}
      </>
    )
  } else {
    return (
      <div className={classes.root}>
        <IconButton variant="text" onClick={handleClickOpen} className={classes.button}>
          <AccountCircle />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          {message ? <>{blockedUser()}</> : <></>}
          <DialogContent>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {field.registro}
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Correo electrónico"
                      name="email"
                      autoComplete="email"
                      value={valuesForm.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={valuesForm.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      textAlign: "center", // this does the magic
                    }}
                  >
                    <Button
                      variant="outlined"
                      className={classes.loginBtnGoogle}
                      size="small"
                      name="google"
                      id="google"
                      href="http://localhost:3001/api/authGoogle/login/google"
                    >
                      {field.google}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          style={{
                            color: "#00BBC9",
                          }}
                        />
                      }
                      label="Deseo recibir publicidad y promociones por email"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {field.createAccount}
                </Button>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Button
                      component={Link}
                      style={{ textDecoration: "none" }}
                      onClick={() => setRegister(!register)}
                      disableRipple
                      className={classes.buttonAccount}
                    >
                      {field.withoutAccount}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      style={{ textDecoration: "none" }}
                      disableRipple
                      className={classes.buttonAccount}
                    >
                      {field.withlogin}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
