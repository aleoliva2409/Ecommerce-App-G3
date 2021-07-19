export const categoryCardStyle = ({ breakpoints, spacing, shadows }) => ({
  paper: {
    position: 'absolute',
    width: "30%",
    backgroundColor: "#ffffff",
    border: '2px solid #3f51b5',
    borderRadius: "15px",
    padding: spacing(2, 4, 3),
    textAlign: "center"
  },
  cardContainer: {
    display: "block",
    width: "17rem",
    height: "6rem",
    border: "1px solid var(--primaryColor)",
    borderRadius: spacing(2),
    padding: spacing(1),
    margin: spacing(2),
    boxShadow: shadows[3],
    backgroundColor: "var(--primaryColor10)",
    "&:hover": {
      boxShadow: shadows[6],
      backgroundColor: "var(--primaryColor20)"
    }
  },
  buttons: {
    margin: spacing(1),
    display: "flex",
    justifyContent: "space-around",
  },
  title: {
    position: "relative",
    top: "-35px",
    textAlign: "left",
    marginLeft: spacing(2),
    color: "var(--primaryColorDarker2)",
    fontWeight: "bolder",
    letterSpacing: spacing(0.2)
  },
  close: {
    display: "block",
    position: "relative",
    right: "-220px",
    top: "-7px",
    padding: spacing(1),
    zIndex: "1",
    color: "red",
    "&:hover": {
      backgroundColor: "#f96262",
      color: "#ab0000"
    }
  },
  description: {
    display: "block",
    position: "relative",
    top: "-30px"
  },
});
