import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  strategySection: {
    marginTop: "150px",

    '@media (max-width:768px)': {
      marginTop: "120px",
      maxWidth: "90%",
      marginLeft: "20px"
    }
  },
  strategyHeading: {
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "60px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto, Helvetica ,Arial, sans-serif",
    paddingBottom: "20px",

    '@media (max-width:768px)': {
      fontSize: "32px",
      lineHeight: "40px"
    }
  },
  startegytext: {
    color: "#6e6e6e",
    fontSize: "18px",
    fontWeight: 500,
    fontFamily: "Roboto, Helvetica ,Arial, sans-serif",
  },


  // StrategyVideSection.js
  videoSectionContainer: {
    marginTop: "150px",

    '@media (max-width:768px)': {
      marginTop: "-25px",
      marginTop: "50px"
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
    }
  }
}));
export { useStyles };