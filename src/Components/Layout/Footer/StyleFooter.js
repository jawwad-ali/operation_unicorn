import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#f3f4f6",
        marginTop: "50px",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        textAlign: "center"
    },
    upwork: {
        paddingLeft: "5px",
        paddingTop: "6px",
        letterSpacing: "0px",
        color: "green",
        fontWeight: 500,
        fontFamily: "Helvetica"
    }
}));
export { useStyles };