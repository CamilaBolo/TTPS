import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
      background:
        " rgba(134,29,29,64)",
      width: "100%",
      height: "10%",
      minHeight: "140px",
  
      display: "flex",
      flexDirection: "row",
      zIndex: 2,
      overflowX: "auto",
    },
    right: {
        display: "flex",
        flex: "1",
        flexDirection: "row-reverse",
        alignItems: "center",
        margin: "2%",
    }
});

export default useStyles