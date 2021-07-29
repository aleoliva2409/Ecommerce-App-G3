export const cartStyle = ({ breakpoints, spacing, theme }) => ({
  root: {
    display: "grid",
    gridTemplateRows: "auto auto auto",
    gridTemplateColumns: "1fr auto",
    gridGap: spacing(1),
    [breakpoints.down("md")]: {
      gridTemplateRows: "1fr auto auto",
      gridTemplateColumns: "1fr",
    }
  },
  cardsContainer: {
    gridColumn: "1/2",
    gridRow: "1/3",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardItem: {
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: `${spacing(2)}px 0`,
    marginTop: spacing(1),
    borderRadius: "10px",
    maxHeight: "15rem",
    [breakpoints.down("md")]: {
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "auto",
      maxHeight: "20rem",
      border: "solid 1px #cccccc",
      flexDirection: "row",
      justifyContent: "space-around",
    }
  },
  nameBox: {
    alignSelf: "center"
  },
  name: {
    lineHeight: "19px",
    textAlign: "center",
    color: "#000000",
    opacity: "80.0%",
    paddingBottom: spacing(1)
  },
  img: {
    width: "auto",
    height: "8rem",
  },
  priceQuantity: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    margin: spacing(1),
    [breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
    }
  },
  price: {
    gridColumn: "1/2",
    fontSize: "26px",
    lineHeight: "36px",
    color: "#000000",
    opacity: "80.0%"
  },
  quantity: {
    border: "solid 1px #aaaaaa",
    fontSize: "15px"
  },
  deleteForever: {
    backgroundColor: "#FF6868",
    border: "solid 1px #cccccc",
    borderRadius: "10px",
    width: "100%",
    gridColumn: "1/2",
    gridRow: "3/4",
    justifySelf: "center",
    "&:hover": {
      backgroundColor: "#D22626",
    }
  },
  checkout: {
    gridColumn: "2/3",
    gridRow: "1/2",
  },
  clearItem: {
    backgroundColor: "#FF6868",
    "&:hover": {
      backgroundColor: "#D22626",
    },
    [breakpoints.up("md")]: {
      gridColumn: "2/3",
      borderRadius: spacing(3),
    }
  }
})
