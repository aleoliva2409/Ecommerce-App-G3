import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({

  formAddProduct: {
    width: "25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      width: "16rem",
      fontSize: "13px"
    }
  },
  field: {
    width: "100%",
    // margin: spacing(1)
  },
  measures: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      flexDirection: "column"
    },
  },
  measuresField: {
    width: "30%",
    [breakpoints.down("sm")]: {
      width: "120%"
    },
  },
  button: {
    margin: spacing(2),
    color: '#FFF',
    backgroundColor: '#00BBC9',
    fontWeight: '900',
    '&:hover': {
      color: '#232020',
      backgroundColor: '#FCEB45',
    },
  },
}))

export default useStyles;
