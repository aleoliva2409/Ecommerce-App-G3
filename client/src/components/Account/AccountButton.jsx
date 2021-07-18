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
import {useStyles} from './AccountStyle';


export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [register,setRegister] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setRegister({
      registro: 'Registrarme',
      google: 'Registrarse con Google',
      createAccount:'Crear cuenta',
      withoutAccount: '¿Tenés cuenta? Logueate',
      withlogin : ''
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickLogin = () =>{
    setRegister({
      registro: 'Iniciar sesión',
      google: 'Iniciar con Google',
      createAccount:'Iniciar sesión',
      withoutAccount:'¿Sin cuenta? Registrate',
      withlogin : '¿La olvidaste?'
    });
  };
  //Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password } = e.target.elements;
    console.log({email: email.value, password: password.value });
  }

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
              {register.registro}
            </Typography>
             <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
              <Grid item xs={12}
                    style={{
                          textAlign:'center' // this does the magic
                     }} >
                <Button
                  variant="outlined"
                  className = {classes.loginBtnGoogle}
                  size='small'
                  name="google"
                  id="google"
                 >
                     {register.google}
                </Button>

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={
                    <Checkbox value="allowExtraEmails"
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
              {register.createAccount}
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button component={Link} style={{textDecoration: 'none'}}  onClick={handleClickLogin}  disableRipple className={classes.buttonAccount} >
                  {register.withoutAccount}
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} style={{textDecoration: 'none'}}  onClick={handleClickLogin}  disableRipple className={classes.buttonAccount} >
                  {register.withlogin}
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
