import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  container:{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: spacing(2)
  },
  generalContainer:{
    backgroundColor: "rgba(255, 255, 255, .5)",
    margin: `${spacing(2)}px 0 ${spacing(2)}px 0`,
  },
  Headers:{
    fontWeight: "bolder",
    letterSpacing: spacing(0.2),
  },
  productsTableCell:{
    border: '1px solid var(--primaryColorDarker)',
    padding: spacing(0.5)
  },
  shippingContainers:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    gridGap: spacing(1),
    userSelect: "none",
  },
  right:{
    gridColumn: "2/3"
  },
  caption:{
    display: "block",
    width: "100%",
    fontWeight: "bolder",
    color: "red",
    textAlign: "center"
  }
}));
