import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    width: "100%",
  },
  cellsImg: {
    width: "12%",
    height: "75px",
    padding: "4px"
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: "cover"
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  th: {
    fontWeight: 700,
    fontSize: "18px",
  }
});

export default useStyles
