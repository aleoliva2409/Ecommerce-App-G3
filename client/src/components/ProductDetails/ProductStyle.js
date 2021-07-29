import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: '#232323',
    margin: 0,
    width: '100%',
    overflow: 'hidden',
    marginTop: '3rem'
  },
  names:{
    color:'#232020'
  },
  ChooseSize:{
    backgroundColor:'#00BBC9'
  },
  cardRoot:{
    width: '80%',
    height: '14rem',
    alignSelf: 'center',
    justifySelf: 'center',
    gridRow: '1/2',
    gridColumn: '1/2',
    backgroundColor: 'transparent',
    margin: theme.spacing(3),
  },
  img:{
    maxWidth:'400px',
    maxHeight:'400px'
  },
  media:{
    width: '70%',
    height: '10rem',
    margin: 'auto',
    backgroundSize: 'contain',
  },
  content:{
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #6b8dc8',
  },
  price:{
    fontSize: '1.5rem',
    textDecoration: 'underline',
    color: '#6b8dc8',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#6b8dc8',
    gridRow: '2/3',
    gridColumn: '1/2',
    [theme.breakpoints.up('md')]:{
      gridColumn: '2/3',
      gridRow: '1/2',
      alignSelf: 'center',
      justifySelf: 'left',
      fontSize: '3rem',
    }
  },
  description: {
    gridColumn: '1/2',
    gridRow: '4/5',
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]:{
      gridColumn: '2/3',
      gridRow: '2/3',
    }
  },
  reviews: {
    width: '100%',
    minHeight: 'auto',
    maxHeight: '15rem',
    gridColumn: '1/2',
    gridRow: '5/6',
    overflowY: 'scroll',
    [theme.breakpoints.up('md')]:{
      gridColumn: '1/3',
      gridRow: '3/4',
    }
  },
  buyButtonContainer:{
    width: '100%'
  },
  buyButton: {
    letterSpacing: '3px',
    margin: '1rem',
    minWidth: '70%',
    justifySelf: 'center'
  },
  options: {
    display: 'flex',
  },
  addController:{
    display: 'flex',
    alignItems: 'center',
    border: `1px solid #3F51B5`,
    borderRadius:  theme.spacing(3)
  },
  addControllerButtons:{
    margin: '1rem'
  }
}));
export { useStyles };
