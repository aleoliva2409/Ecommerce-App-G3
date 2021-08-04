import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing, theme }) => ({
  root: {
    width: "20rem",
    height: "15rem",
    backgroundColor: "white",
    marginTop: spacing(1),
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: spacing(1),
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    // backgroundColor: "#e0e0e0",
    backgroundColor: '#00BBC9',
    color: '#FFF',
    padding: spacing(1.2),
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: '900',
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      // backgroundColor: "#d5d5d5"
      color: '#232020',
      backgroundColor: '#FCEB45',
    }
  },
  button: {
    // margin: spacing(2),
    color: '#FFF',
    backgroundColor: '#00BBC9',
    fontWeight: '900',
    '&:hover': {
      color: '#232020',
      backgroundColor: '#FCEB45',
    },
  }
}))

export { useStyles };
