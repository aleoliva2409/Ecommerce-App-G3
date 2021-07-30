import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({

  formAddProduct: {
    width: "25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    width: "100%",
    margin: spacing(1)
  },
  measures: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  measuresField: {
    width: "30%"
  }
}))

export default useStyles;
