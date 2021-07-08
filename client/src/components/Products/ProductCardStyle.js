export const cardStyle = ({breakpoints, spacing}) => ({
  linkContainer:{
    textDecoration: 'none',
    '&:hover':{
      textDecoration: 'none',
    }
  },
  root: {
    marginLeft: '0.5rem',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    position: 'relative',
    maxWidth: 500,
    height: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
    '&:hover':{
      boxShadow: '0px 10px 20px rgba(34, 35, 58, 0.2)',
    }
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    backgroundSize: 'contain',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: spacing(2), // 16
      border: '2px solid #6b8dc8',
      opacity: 0.5,
    },
  },
  data:{
    maxWidth: '70%',
    height: 'auto',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  title:{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#6b8dc8'
  },
  price:{
    fontSize: '1.2rem',
    textDecoration: 'underline',
    textAlign: 'left',
    marginLeft: spacing(2),
  },
  footer:{
    margin: '0.5rem',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerDetails:{
    color:'#6b8dc8',
    marginLeft: spacing(2),
  }
});
