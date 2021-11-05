import RightItems from "../Header/RightItems";
import LeftItems from "../Header/LeftItems";
import useStyles from "./headerStyles";

const Header = () =>
{
	const classes = useStyles();
	return (
		<div className={classes.header}>
			<RightItems />
			<LeftItems />
		</div>
	);
};

export default Header;