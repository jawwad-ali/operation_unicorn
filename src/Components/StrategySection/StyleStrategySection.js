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
    letterSpacing: "2px",
    lineHeight: "60px",
  },
  startegytext: {
    color: "#6e6e6e",
    fontSize: "17px",
    marginBottom: "1rem",
    marginTop: "2rem",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "1.2px",
  },
  videoSectionContainer: {
    marginTop: "20px"
  },


  // StrategyVideSection.js
  videoContainer: {
    height: "400px"
  }
}));

export { useStyles };