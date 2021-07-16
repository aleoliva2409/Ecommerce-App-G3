import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PersonIcon from '@material-ui/icons/Person';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    maxWidth: '400px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#00BBC9',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button:{
    color: '#FFF'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00BBC9',
    '&:hover':{
      backgroundColor: '#232020 ',
    },

  },
}));



export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="text" onClick={handleClickOpen}  className={classes.button} startIcon={<PersonIcon />}  >
        Mi cuenta
      </Button>
      <Dialog open={open} onClose={handleClose}>

        <DialogContent>

          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nuevo Cliente
            </Typography>
             <form className={classes.form} noValidate>
            <Grid container spacing={2}>

              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails"
                      className={classes.checkboxx}
                      style ={{
                        color: "#00BBC9",
                      }}
                    />}
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
              Crear cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  ¿Tenés cuenta? Logueate
                </Link>
              </Grid>
            </Grid>
          </form>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
}
