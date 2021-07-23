import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './../../redux/actions/userActions';

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { state, user } = useSelector((state) => state.users);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    dispatch(getUser(token))
  }, [state])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(anchorEl)
  if(!user) return <Redirect to='/'/>
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <div>id: {user.id}</div>
      <div>user: {user.email}</div>
    </div>
  );
}
