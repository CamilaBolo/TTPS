import {useEffect, useState} from "react";
import {useRouteMatch} from "react-router";
import {routes} from "../../constants/routes";
import HomeButtons from "./HomeButtons";
import useStyles from "../General/headerStyles";

const mapPagetoIcons = () =>
{
	return {
		[routes.HOME]: () => <HomeButtons />,
		// [routes.LOGIN]: () => <HomeButtons />,
	};
};

const RightItems = () =>
{
	const {path} = useRouteMatch();
	const [rightItems, setRightItems] = useState(mapPagetoIcons()[path]);

	useEffect(() =>
	{
		setRightItems(mapPagetoIcons()[path]);
	}, [path]);

	const classes = useStyles();
	return <div className={classes.right}>{rightItems}</div>;
};

export default RightItems;