import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	background: {
		background: "linear-gradient(90deg, rgba(61,61,61,1) 0%, rgba(110,110,110,1) 73%, rgba(142,142,142,1) 100%)",
		position: "absolute",
		width: "100%",
		flex: "1",
		backgroundSize: "100%",
		"-webkit-tap-highlight-color": "transparent",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		zIndex: 0,
	},
	children: {
		width: "100%",
		height: "100%",
		position: "relative",
		zIndex: "3",
		display: "flex",
		flexDirection: "column",
	},
});

export default useStyles;