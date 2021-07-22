import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  header:{
    backgroundColor: "var(--primaryColor)",
    border: '1px solid var(--primaryColorDarker)'
  },
  headerText:{
    fontWeight: "bolder",
    textSpacing: "1px"
  },
  rows:{
    "&:hover":{
      backgroundColor: "var(--primaryColor30)"
    }
  },
  cells:{
    padding: `0 ${spacing(2)}px 0 ${spacing(2)}px`,
    border: '1px dotted var(--primaryColor)'
  },
  collapse:{
    backgroundColor: "var(--primaryColor30)"
  },
  sort:{
    color: "black",
  }
}))
