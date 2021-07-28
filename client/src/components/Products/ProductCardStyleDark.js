import {makeStyles} from '@material-ui/core/styles';

const useStylesDark = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    //maxHeight: 745,
    //height:500
    backgroundColor:"#7E7E7E"
  },
  cardHeaderP:{
    height: 150,
  },
  headertitle:{
    fontWeight:'900',
    justifyContent:"center",
    '&a':{
      textDecoration: 'none'
    }
  },
  subheader:{
    color: '#232323'

  },
  button:{
    color: '#FFF',
    backgroundColor: '#00BBC9',
    fontWeight:'900',
    '&:hover': {
      color: '#232020',
      backgroundColor: '#FCEB45',
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price:{
    fontWeight:'700'
  }

}));

export { useStylesDark };
