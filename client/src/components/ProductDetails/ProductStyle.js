export const styleProduct = ({breakpoints, spacing, theme}) => ({
  root: {
    margin: '1rem auto 1rem auto',
    width: '80%',
    height: 'auto',
    display: 'grid',
    flexGrow: 1,
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto auto auto auto auto',
    [breakpoints.up('md')]:{
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto auto auto',
      gridGap: spacing(3),
    },

  },
  cardRoot:{
    alignSelf: 'center',
    justifySelf: 'center',
    gridRow: '1/2',
    gridColumn: '1/2',
    backgroundColor: '#FFF',
    width: '20rem',
    height: '20rem',
    margin: spacing(3),
  },
  media:{
    width: '100%',
    height: '16rem',
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
    textDecoration: 'none',
    fontWeight: '700',
    color: '#232020',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#6b8dc8',
    gridRow: '2/3',
    gridColumn: '1/2',
    [breakpoints.up('md')]:{
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
    marginTop: spacing(2),
    marginBottom: spacing(2),
    [breakpoints.up('md')]:{
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
    [breakpoints.up('md')]:{
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
    borderRadius:  spacing(3)
  },
  addControllerButtons:{
    margin: '1rem'
  }
})
