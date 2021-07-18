import { makeStyles } from "@material-ui/core/styles";
import { ArrowLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        [theme.breakpoints.down("sm")]:{
          width: "80%",
          height: "15rem"
        },
        [theme.breakpoints.up("sm")]:{
          width: "50%",
          height: "15rem"
        },
        [theme.breakpoints.up("md")]:{
          width: 400,
        }
      },
    cardContainer: {
      display: "block",
      width: "17rem",
      height: "6rem",
      border: "1px solid var(--primaryColor)",
      borderRadius: theme.spacing(2),
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      boxShadow: theme.shadows[3],
      backgroundColor: "var(--primaryColor10)",
      "&:hover":{
        boxShadow: theme.shadows[6],
        backgroundColor: "var(--primaryColor20)"
      }
    },
    title:{
      position: "relative",
      top: "-35px",
      textAlign: "left",
      marginLeft: theme.spacing(2),
      color: "var(--primaryColorDarker2)",
      fontWeight: "bolder",
      letterSpacing: theme.spacing(0.2)
    },
    close:{
      display: "block",
      position: "relative",
      right: "-220px",
      top: "-7px",
      padding: theme.spacing(1),
      zIndex: "1",
      color: "red",
      "&:hover":{
        backgroundColor: "#f96262",
        color: "#ab0000"
      }
    },
    description:{
      display: "block",
      position: "relative",
      top: "-30px"
    },
    buttonOutlined:{
      color: "var(--primaryColorDarker2)",
      borderColor: "var(--primaryColorDarker)",
      margin: theme.spacing(2),
      fontWeight: "bolder",
      letterSpacing: theme.spacing(0.2),
      "&:hover":{
        backgroundColor: "var(--primaryColor10)",
      }
    },
    buttonOutlinedColorRed:{
      backgroundColor: "#f96262",
      borderColor: "#f96262",
      margin: theme.spacing(2),
      color: "white",
      fontWeight: "bolder",
      letterSpacing: theme.spacing(0.2),
      "&:hover":{
        boxShadow: theme.shadows[3],
        backgroundColor: "#f96262"
      }
    },
    modalTitle:{
      color: "var(--primaryColorDarker2)",
      fontWeight: "bolder",
      letterSpacing: theme.spacing(0.2)
    }
}));

export default useStyles;
