export const categoryStyles = ({ breakpoints, spacing, theme }) => ({
  categoryContainer: {
    display: "grid",
    gtidTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto",
    alignItems: "center",
    justifyItems: "center"
  },
  line: {
    width: "60%",
    border: "solid 0.5px black",
    margin: spacing(2)
  },
  textField: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: spacing(2),
    borderRadius: "15px"
  },
  item: {
    width: "100%",
    margin: spacing(1),
    '&::placeholder': {
      textAlign: "center"
    }
  }
})
