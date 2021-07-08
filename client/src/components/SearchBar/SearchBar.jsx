import React from 'react'
import InputBase from '@material-ui/core/InputBase';
// * STYLES *
import {useStyles} from './Styles';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <InputBase
        placeholder="Search…"
        color='secondary'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
    />
  )
}

export default SearchBar
