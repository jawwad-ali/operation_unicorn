import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  strategySection: {
    marginTop: "40px"
  },
  strategyHeading: {
    fontSize: "45px",
    fontWeight: "bold",
    letterSpacing: "1px",
    lineHeight: "50px",
  },
  startegytext: {
    color: "#6e6e6e",
    fontSize: "18px",
    marginBottom: "1rem",
    marginTop: "2rem",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  }
}));

export { useStyles };