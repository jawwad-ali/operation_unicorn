import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    quoteContainer: {
        '@media (max-width:768px)': {
            width: "100%",
        },
    },
    quote: {
        fontSize: "20px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        textAlign: "center",
        paddingBottom: "20px",

        '@media (max-width:768px)': {
            fontSize: "19px",
            textAlign: "left",
            padding: "8px"
        },
    },
    quoteIcon: {
        transform: `rotate(180deg)`,
        fontSize: "48px !important",

        '@media (max-width:768px)': {
            marginLeft: "-10px"
        },
    },
    quoteByDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "right",
        alignItems: "right",
        marginTop: "-15px !important",
        marginBottom: "20px !important",
        fontFamily: "Pacifico !important",

        '@media (max-width:768px)': {
            width: "50%",
            marginLeft: "auto",
            marginRight: 0,
        },
    },
    quoteBy: {
        fontFamily: "Pacifico !important",
        fontSize: "23px",

        '@media (max-width:768px)': {
            paddingTop: "20px"
        },
    }
}));
export { useStyles };