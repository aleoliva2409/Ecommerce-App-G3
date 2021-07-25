import { makeStyles } from '@material-ui/core/styles';

const useStylesDark = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor:"#7E7E7E"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export { useStylesDark };