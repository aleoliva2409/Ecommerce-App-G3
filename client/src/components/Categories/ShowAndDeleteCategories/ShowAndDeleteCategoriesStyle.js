export const categoriesShow_Delete = ({ breakpoints, spacing }) => ({
  categoriesContainer: {
    display: "flex",
    justifyContent: "center",
  },
  categoriesBox: {
    width: "60%",
    backgroundColor: "#ffffff",
    margin: `${spacing(2)}px 0`,
    borderRadius: "15px",
    [breakpoints.down("md")]: {
      width: "100%"
    }
  },
  categoriesCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: `${spacing(2)}px 0`,
  }
})
