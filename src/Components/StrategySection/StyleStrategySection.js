import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  strategySection: {
    marginTop: "40px",
  },
  strategyHeading: {
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "60px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto !important",

    ['@media (max-width:768px)']: {
      fontSize: "32px",
      lineHeight: "40px"
    }
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
    marginTop: "20px",
  },

  // StrategyVideSection.js

  tabs: {
    width: "90%",
    margin: "0 auto",
  },
  tab: {
    fontSize: "12px"
  },
  videoContainer: {
    height: "400px",

    ['@media (max-width:768px)']: {
      height: "250px",
      padding: "8px",
    }
  }
}));
export { useStyles };