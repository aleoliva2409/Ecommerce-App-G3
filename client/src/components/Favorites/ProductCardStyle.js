import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    //maxHeight: 745,
    //height:500
  },
  cardHeaderP:{
    height: 170,
  },
  size:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'center'
  }
  ,
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
  tamanio:{
    marginRight:'7px'
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
  cardact:{
    justifyContent:'space-evenly',
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price:{
    fontWeight:'700'
  },
  price: {
    color: "black",
    fontWeight: "700"
  }

}));

export { useStyles };
