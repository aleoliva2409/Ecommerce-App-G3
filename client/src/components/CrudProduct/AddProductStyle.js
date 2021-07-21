import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // formAddProduct:{
  //   width:300,
  // },
  buttonAddProduct:{
    color:'#232020',
    border: '2px solid',
    borderColor: '#232020',
    '&:hover':{
      color:'#00BBC9',
      borderColor: '#00BBC9'
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}))

export default useStyles;
