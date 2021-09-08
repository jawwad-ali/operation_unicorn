import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    missionContainer: {
        marginTop: "170px",
    },
    missionContainerAlternate: {
        display: "flex",
        marginTop: "170px",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
    },
    title: {
        fontSize: "30px",
        color: "black",
        fontWeight: "bold",

    },
    imgDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        height: "300px",
        width: "300px"
    },
    text: {
        color: "#5e5e5e",
        fontSize: "20px",
        textAlign: "justify",
    }
}));
export { useStyles };