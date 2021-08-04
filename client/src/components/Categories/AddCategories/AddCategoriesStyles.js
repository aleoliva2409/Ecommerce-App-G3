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
    borderRadius: "15px",
    [breakpoints.down("md")]: {
      width: "100%"
    }
  },
  // item: {
  //   width: "100%",
  //   margin: spacing(1),
  //   color: '#FFF',
  //   backgroundColor: '#00BBC9',
  //   fontWeight: '900',
  //   '&::placeholder': {
  //     textAlign: "center"
  //   },
  //   '&:hover': {
  //     color: '#232020',
  //     backgroundColor: '#FCEB45',
  //   },
  // },
  button: {
    // margin: spacing(2),
    color: '#FFF',
    backgroundColor: '#00BBC9',
    fontWeight: '900',
    '&:hover': {
      color: '#232020',
      backgroundColor: '#FCEB45',
    },
  },
})
