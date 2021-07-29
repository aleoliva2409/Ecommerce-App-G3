export const categoryCardStyle = ({ breakpoints, spacing, shadows }) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid var(--primaryColor)",
    borderRadius: spacing(4),
    padding: spacing(0.5),
    margin: spacing(1),
    boxShadow: shadows[3],
    backgroundColor: "var(--primaryColor10)",
    "&:hover": {
      boxShadow: shadows[6],
      backgroundColor: "var(--primaryColor20)"
    }
  },
  title: {
    margin: spacing(1),
    color: "var(--primaryColorDarker2)",
    fontWeight: "bolder",
    letterSpacing: spacing(0.2)
  },
  close: {
    padding: spacing(1),
    color: "red",
    "&:hover": {
      backgroundColor: "#f96262",
      color: "#ab0000"
    }
  },
  paper: {
    position: 'absolute',
    width: "30%",
    backgroundColor: "#ffffff",
    border: '2px solid #3f51b5',
    borderRadius: "15px",
    padding: spacing(2, 4, 3),
    textAlign: "center",
    [breakpoints.down("md")]: {
      width: "90%"
    }
  },
  buttons: {
    margin: spacing(1),
    display: "flex",
    justifyContent: "space-around",
  },
});
