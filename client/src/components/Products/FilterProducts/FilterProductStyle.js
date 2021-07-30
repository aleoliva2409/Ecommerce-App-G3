import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: palette.background.paper,
  },
  nested: {
    paddingLeft: spacing(4),
  },
  button: {
    margin: spacing(2),
    color: '#FFF',
    backgroundColor: '#00BBC9',
    fontWeight: '900',
    '&:hover': {
      color: '#232020',
      backgroundColor: '#FCEB45',
    },
  },
}));

export { useStyles };
