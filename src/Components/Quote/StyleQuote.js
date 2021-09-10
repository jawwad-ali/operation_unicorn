import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    quoteContainer: {
        '@media (max-width:768px)': {
            width: "95%",
            margin: "0 auto"
        },
    },
    quote: {
        fontSize: "20px",
        fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
        textAlign: "center",
        paddingBottom: "20px",

        '@media (max-width:768px)': {
            fontSize: "18px",
            textAlign: "left",
            padding: "8px"
        },
    },
    quoteIcon: {
        transform: `rotate(180deg)`,
        fontSize: "48px !important",
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
            width: "90%"
        },
    },
    quoteBy: {
        fontFamily: "Pacifico !important",
        fontSize: "23px",
    }
}));
export { useStyles };