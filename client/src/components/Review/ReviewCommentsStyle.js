import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    marginTop:'2rem'
  },

  formControl:{
    marginTop:'2rem',
    display: 'flex',
    alignItems: 'stretch',
  },
  review1:{
    display:'flex',
    justifyContent: 'flex-end'
  },
  labbel:{
    fontSize:'0.8rem',
    alignSelf: 'center',
    paddingRight: '0.2rem'
  },
  text:{
    marginTop:'1rem'
  },
  button1:{
    margin: '1rem',
    alignSelf: 'flex-end',
    marginRight: '0',
    backgroundColor : '#00BBC9',
    '&:hover':{
      backgroundColor : '#232020'
    },
  }

  }));

export { useStyles };
