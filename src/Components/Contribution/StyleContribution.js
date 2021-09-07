import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contributionSectionContainer: {
        borderRadius: "30px!important",
        boxShadow: "0 18px 50px -10px rgba(0,0,0,.2)!important",
        marginBottom: "8rem",
        marginTop: "6rem",
        paddingBottom: "1rem",
        paddingTop: "4rem",
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
        // border: "1px solid blue",
    },
    cardTitle: {
        color: "black",
        fontSize: "24px",
        fontWeight: 700
    },
    cardText: {
        fontfamily: "Roboto Helvetica Arial  sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        paddingTop: "20px"
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
        padding: "1rem !important"
    }
    // cardBtn: {
    //     background: "#416ffe",
    //     border: "none",
    //     borderRadius: "40px",
    //     boxShadow: "0 12px 40px #b9b8b8",
    //     color: "#fff",
    //     cursor: "pointer",
    //     fontSize: "15px",
    //     outline: "none",
    //     padding: "1rem",
    //     textAlign: "center",
    //     transition: ".4s ease-in -out",
    //     width: "80%",
    //     marginTop: "2rem",
    //     paddingBottom: "4rem",
    // }

}));
export { useStyles };