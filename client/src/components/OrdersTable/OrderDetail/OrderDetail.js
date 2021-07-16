import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  container:{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: spacing(2)
  }
}));
