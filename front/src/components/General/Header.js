import RightItems from "../Header/RightItems";
import LeftItems from "../Header/LeftItems";
import useStyles from "./headerStyles";

const Header = () =>
{
	const classes = useStyles();
	return (
		<div id="Header" className={classes.header}>
			<LeftItems />
			<RightItems />
		</div>
	);
};

export default Header;