import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
import { Redirect } from 'react-router-dom';
// * {Actions}
import { passwordReset } from './../../redux/actions/userActions';

// * Style
import { useStyles } from './AccountStyle';

export default function FormDialog() {
  const dispatch = useDispatch()
  const classes = useStyles();
  //const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { state, user } = useSelector((state) => state.users);

  const [password, SetPassword] = useState({
    password_1: '',
    password_2: '',
  })

  //onChange Handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPassword({ ...password, [name]: value });
  };

  //Form Submit
  const handleSubmit = e => {
    e.preventDefault();
    const { password_1, password_2 } = password;
    if (password_1 === password_2) dispatch(passwordReset(password))
    else alert('los campos no coinciden')
  };

  if (!user) return <Redirect to='/' />
  if(user && !user.passwordReset) return <Redirect to='/users/me' />

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
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
                label='Contraseña'
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
                label='Contraseña'
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
  );
}
