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
    lineHeight: "60px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto !important"
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