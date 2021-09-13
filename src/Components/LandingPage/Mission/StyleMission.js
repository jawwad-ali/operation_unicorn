import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    missionContainer: {
        marginTop: "170px",

        '@media (max-width:768px)': {
            width: "95%",
            padding: "10px",
            margin: "0 auto",
            marginBottom: "8px"
        },
    },
    missionContainerAlternate: {
        display: "flex",
        marginTop: "170px",
        justifyContent: "space-between",
        flexDirection: "row-reverse",

        '@media (max-width:768px)': {
            width: "95%",
            padding: "10px",
            margin: "0 auto",
            marginBottom: "8px"
        },
    },
    title: {
        fontSize: "30px",
        color: "black",
        fontWeight: "bold",
        fontFamily: "Roboto, Helvetica ,Arial, sans-serif",

        '@media (max-width:768px)': {
            fontSize: "30px",
            marginLeft: "-11px !important",
            marginBottom: "20px",
            lineHeight: "40px"
        }
    },
    imgDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        '@media (max-width:768px)': {
            width: "100%",
            borderBottom: "2px solid silver",
            margin: "70px 0px"
        }
    },
    img: {
        height: "300px",
        width: "300px",

        '@media (max-width:768px)': {
            width: "100%"
        }
    },
    text: {
        color: "#6e6e6e",
        fontSize: "20px",
        textAlign: "justify",
        fontFamily: "Roboto, Helvetica ,Arial, sans-serif",
        fontWeight: 500,

        '@media (max-width:768px)': {
            fontSize: "17px",
            fontWeight: "none",
            marginLeft: "-11px !important"
        }

    }
}));
export { useStyles };