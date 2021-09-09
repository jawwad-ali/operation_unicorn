import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contributionSectionContainer: {
        borderRadius: "30px!important",
        boxShadow: "0 18px 50px -10px rgba(0,0,0,.2)!important",
        marginBottom: "8rem",
        marginTop: "6rem",
        paddingBottom: "1rem",
        paddingTop: "4rem",

        ['@media (max-width:768px)']: {
            width: "90%",
        }
    },
    titleDiv: {
        width: "100%",
        textAlign: "center",
        marginBottom: "50px"
    },
    title: {
        fontSize: "2.125rem",
        fontFamily: "Roboto",
        fontWeight: "bold",

        ['@media (max-width:768px)']: {
            fontSize: "25px",
        }
    },

    card: {
        margin: "25px",
        background: "#f8fafb",
        borderRadius: "10px",
        padding: "12px",
        height: "23rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",

        ['@media (max-width:768px)']: {
            width: "90%",
            padding: "0px"
        }
    },
    cardTitle: {
        color: "black",
        fontSize: "24px",
        fontWeight: 700,

        ['@media (max-width:768px)']: {
            fontSize: "24px",
        }
    },
    cardText: {
        fontfamily: "Roboto Helvetica Arial  sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        paddingTop: "20px",
    },
    btnDiv: {
        paddingBottom: "4rem",
        width: "100% !important",
    },
    cardBtn: {
        backgroundColor: "#416ffe",
        border: "none",
        borderRadius: "40px !important",
        color: "white !important",
        fontSize: "15px !important ",
        width: "100%",
        textAlign: "center",
        padding: "1rem !important",
    },
    btnText: {
        ['@media (max-width:768px)']: {
            fontSize: "15px"
        },
    },
}));
export { useStyles };