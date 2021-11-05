import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	header: {
		background:
			"linear-gradient(90deg, rgba(106,19,19,1) 0%, rgba(152,24,24,1) 70%, rgba(195,28,28,1) 87%, rgba(255,30,30,0.76234243697479) 100%)",
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

export default useStyles;