import {makeStyles} from '@material-ui/core/styles';

const useStylesDark = makeStyles(({ breakpoints, spacing, theme }) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      cardItem: {
        backgroundColor: "#7E7E7E",
        display: "grid",
        gridTemplateRows: "repeat(4, auto)",
        margin: spacing(1),
        padding: `${spacing(2)}px 0`,
        borderRadius: "10px",
        [breakpoints.up("md")]: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          border: "solid 1px #cccccc",
          flexDirection: "row",
          justifyContent: "space-around",
        }
      },
      name: {
        fontSize: "16px",
        lineHeight: "19px",
        color: "white",
        opacity: "80.0%",
        paddingBottom: spacing(1)
      },
      img: {
        width: "50%",
        [breakpoints.up("md")]: {
          width: "100%",
        }
      },
      priceQuantity: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        //margin: spacing(1),
      },
      price: {
        gridColumn: "1/2",
        fontSize: "26px",
        lineHeight: "36px",
        color: "white",
        opacity: "80.0%"
      },
      quantity: {
        color: "white",
        border: "solid 1px #aaaaaa",
        fontSize: "15px"
      },
      deleteForever: {
        backgroundColor: "#FF6868",
        border: "solid 1px #cccccc",
        width: "100%",
        "&:hover": {
          backgroundColor: "#D22626",
        }
      },
      clearItem: {
        backgroundColor: "#FF6868",
        "&:hover": {
          backgroundColor: "#D22626",
        }
      }
}))

export { useStylesDark };