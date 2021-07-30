import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";
// * {Actions}
import { passwordReset } from './../../redux/actions/userActions';

// * Style
import { useStyles } from './ResetStyle';

export default function FormDialog() {
  const dispatch = useDispatch()
  const classes = useStyles();
  //const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { state, user } = useSelector((state) => state.users);
  const [errors, setErrors] = useState('Hace mucho no cambias tu contraseña!. Por tu seguridad debes cambiarla');
  const [message, setMessage] = useState('0');
  const [password, SetPassword] = useState({
    password_1: '',
    password_2: '',
  })

  //onChange Handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPassword({ ...password, [name]: value });
    setErrors(validate({ ...password, [name]: value }));
  };

  //Form Submit
  const handleSubmit = e => {
    e.preventDefault();
    setMessage(errors)
    if (!errors) dispatch(passwordReset(password));
  };

  const blockedUser = () => {
    return (
      <MuiAlert
        elevation={6}
        onClose={() => {
          setMessage('')
        }}
        variant="filled"
        severity="error"
        color="error"
      >
        {errors}
      </MuiAlert>
    );
  };

  const validate = (input) => {
    let errors = '';
    if (input.password_1 !== input.password_2) errors = 'Los campos no coinciden'
    if (input.password_1.length < 5 && input.password_2.length < 5) errors = 'La contraseña debe tener almenos cinco caracteres';
    if (!/(?=.*[0-9])/.test(input.password_1)) errors = 'La contraseña debe tener almenos un número';
    if (!input.password_1 || !input.password_2) errors = 'Uno o mas campos estan vacios';
    return errors;
  }

  if (!user) return <Redirect to='/' />
  if(user && !user.passwordReset) return <Redirect to='/users/me' />

  return (
    <>
    <div className={classes.root}>
      <div className={classes.paper}>
    {message ? <>{blockedUser()}</> : <></>}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Reset Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password_1'
                label='Nueva contraseña'
                type='password'
                id='password_1'
                autoComplete='current-password'
                value={password.password_1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password_2'
                label='Confirmar contraseña'
                type='password'
                id='password_2'
                autoComplete='current-password'
                value={password.password_2}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                textAlign: 'center' // this does the magic
              }}
            >
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Enviar
          </Button>
          <Grid container justifyContent='space-between'>
          </Grid>
        </form>
      </div>
    </div>
    </>
  );
}
