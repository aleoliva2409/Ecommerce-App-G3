import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: "0 0 50px rgb(234, 232, 300)",
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
    },
    data: {
      display: "flex",
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    rootSnack: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));

  export { useStyles };