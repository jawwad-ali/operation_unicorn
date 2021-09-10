import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  strategySection: {
    marginTop: "150px",
  },
  strategyHeading: {
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "60px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto !important",
    paddingBottom: "20px",

    '@media (max-width:768px)': {
      fontSize: "32px",
      lineHeight: "40px"
    }
  },
  startegytext: {
    color: "#6e6e6e",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "1.2px",
  },


  // StrategyVideSection.js
  videoSectionContainer: {
    marginTop: "150px",

    '@media (max-width:768px)': {
      marginTop: "-25px"
    }
  },
  tabs: {
    margin: "0 auto",
    backgroundColor: "#d8d8d8",
    width: "100%",
  },
  tab: {
    fontSize: "12px"
  },
  videoContainer: {
    height: "400px",

    '@media (max-width:768px)': {
      height: "250px",
      padding: "8px",
    }
  }
}));
export { useStyles };