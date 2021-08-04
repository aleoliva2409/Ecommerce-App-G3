import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    margin:'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    backgroundColor: 'none',
  },
  autocomplet:{
    margin:'5px',
    width: '130ch',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.down('lg')]: {
      width: '100ch',
    },
    [theme.breakpoints.down('md')]: {
      width: '50ch',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50ch',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20ch',
    },
  }

}));

export { useStyles };
