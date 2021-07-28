import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
      display: 'flex',
    },
    buttonAccount:{
      padding: '0px',
      textTransform: 'capitalize',
      '&:hover':{
        backgroundColor:'transparent'
      },
      '&:focus':{
        backgroundColor:'transparent'
      }
    },
    label: {
      fontSize: '0.9em'
    },
    loginBtnGoogle:{
      background: '#DD4B39',
      color: '#FFF',
      '&:hover': {
        background: '#E74B37',
      },
      '&:focus':{
        background: '#E74B37',
      },
      '&:before':{

          borderRight: '#BB3F30',
          background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png)',

      }
    },
    paper: {
      margin: theme.spacing(2),
      display: 'flex',
      maxWidth: '400px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#00BBC9',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    button:{
      color: '#FFF'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#00BBC9',
      '&:hover':{
        backgroundColor: '#232020 ',
      },

    },
    linkAccount:{
      color:'#232323'
    }

  }));

  export { useStyles };
