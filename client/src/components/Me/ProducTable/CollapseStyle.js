import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
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
  cells: {
    width: "12%",
    height: "75px",
  },
  cellsName: {
    width: "30%"
  }
});

export default useStyles
