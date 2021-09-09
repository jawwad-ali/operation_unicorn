import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    missionContainer: {
        marginTop: "170px",

        ['@media (max-width:768px)']: {
            width: "95%",
            padding: "10px",
            margin: "0 auto",
            marginBottom: "5px"
        },
    },
    missionContainerAlternate: {
        display: "flex",
        marginTop: "170px",
        justifyContent: "space-between",
        flexDirection: "row-reverse",

        ['@media (max-width:768px)']: {
            width: "95%",
            padding: "10px",
            margin: "0 auto",
            marginBottom: "5px"
        },
    },
    title: {
        fontSize: "30px",
        color: "black",
        fontWeight: "bold",

        ['@media (max-width:768px)']: {
            fontSize: "25px",
            lineHeight: "35px"
        }
    },
    imgDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ['@media (max-width:768px)']: {
            width: "90%"
        }
    },
    img: {
        height: "300px",
        width: "300px",

        ['@media (max-width:768px)']: {
            width: "100%"
        }
    },
    text: {
        color: "#5e5e5e",
        fontSize: "20px",
        textAlign: "justify",

        ['@media (max-width:768px)']: {
            fontSize: "16px"
        }

    }
}));
export { useStyles };