import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Typography, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { selectAdmins, setBlocks, setReset } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useStyles } from './userCardStyles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function UserCard({ id, email, isAdmin, blocked, resetPw }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openAdmin, setOpenAdmin] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);
  const [openReset, setOpenReset] = useState(false);

  const handleClickAdmin = () => {
    setOpenAdmin(true);
  };
  const handleClickBlock = () => {
    setOpenBlock(true)
  }

  const handleClickReset = () => {
    setOpenReset(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAdmin(false);
    setOpenBlock(false)
    setOpenReset(false);
  };

  const addAdmin = (id, act) => {
    dispatch(selectAdmins(id, act));
  };

  function allOnClicksTrue() {
    addAdmin(id, true);
    handleClickAdmin();
  }

  function allOnClicksFalse() {
    addAdmin(id, false);
    handleClickAdmin();
  }

  function blockTrue () {
    block(id, true);
    handleClickBlock();
  }
  function blockFalse () {
    block(id, false);
    handleClickBlock();
  }
  const block = (id, act) => {
    dispatch(setBlocks(id, act));
  };

  function resetTrue () {
    reset(id, true);
    handleClickReset();
  };

  function resetFalse () {
    reset(id, false);
    handleClickReset();
  };

  const reset = (id, act) => {
    dispatch(setReset(id, act))
  }

  return (
    <Card className={classes.root}>
      <Grid item xs={3}>
        <CardContent className={classes.data}>
          <Typography>{email}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardContent>
          <Typography>{!isAdmin ? "" : "ADMINISTRADOR"}</Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!resetPw ? (
          <>
            <Button onClick={resetTrue} autoHideDuration={2000} className={classes.blockFalse} variant="contained">
              Reset contraseña
            </Button>
             <Snackbar open={openReset} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Condición establecida
              </Alert>
            </Snackbar>
          </>
        ) : (
          <>
            <Button onClick={resetFalse} autoHideDuration={2000} className={classes.blockTrue} variant="contained">
            Descartar Reset
            </Button>
           <Snackbar open={openReset} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Condición establecida
              </Alert>
            </Snackbar>
          </>
        )}
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!blocked ? (
          <>
            <Button onClick={blockTrue} autoHideDuration={2000} className={classes.blockFalse} variant="contained">
              Bloquear usuario
            </Button>
             <Snackbar open={openBlock} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {email} desbloqueado
              </Alert>
            </Snackbar>
          </>
        ) : (
          <>
            <Button onClick={blockFalse} autoHideDuration={2000} className={classes.blockTrue} variant="contained">
            Desbloquear usuario
            </Button>
           <Snackbar open={openBlock} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {email} bloqueado
              </Alert>
            </Snackbar>
          </>
        )}
      </Grid>
      <Grid item xs={3} className={classes.buttons}>
        {!isAdmin ? (
          <>
            <Button onClick={allOnClicksTrue} color="primary" variant="contained">
              Designar Admin
            </Button>
            <Snackbar open={openAdmin} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {email} no es mas administrador
              </Alert>
            </Snackbar>
          </>
        ) : (
          <>
            <Button onClick={allOnClicksFalse} color="secondary" variant="contained">
              Descartar Admin
            </Button>
            <Snackbar open={openAdmin} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {email} ahora es administrador
              </Alert>
            </Snackbar>
          </>
        )}
      </Grid>
    </Card>
  );
}
