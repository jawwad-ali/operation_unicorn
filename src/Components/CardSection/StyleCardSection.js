import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardSectionContainer: {
        borderRadius: "30px!important",
        boxShadow: "0 18px 50px -10px rgba(0,0,0,.2)!important",
        marginBottom: "8rem",
        marginTop: "6rem",
        paddingBottom: "1rem",
        paddingTop: "4rem",
    },
    innerCardContainer: {
        width: "30%",
        padding: "16px"
    },
    media: {
        height: "280px",
    },
    name: {
        fontSize: "17px",
        fontFamily: "Roboto ",
    },

    oneLinerContainer: {
        border: "1px solid red",
        width: "100%"
    },
    text: {
        fontSize: "28px",
        textAlign: "center",
        wordSpacing: ".4rem",
        marginTop: "35px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
    }
}));
export { useStyles };