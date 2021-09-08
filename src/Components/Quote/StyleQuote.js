import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    quote: {
        fontSize: "20px",
        // fontFamily: "Roboto",
        fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
        textAlign: "center",
        paddingBottom: "20px",
    },
    quoteIcon: {
        transform: `rotate(180deg)`,
        fontSize: "48px !important"
    },
    quoteByDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "right",
        alignItems: "right",
        marginTop: "-15px !important",
        marginBottom: "20px !important",
        fontFamily: "Pacifico !important",
    },
    quoteBy: {
        fontFamily: "Pacifico !important",
        fontSize: "23px",
    }
}));
export { useStyles };