import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import {generatePath} from "react-router";
import {routes} from "../../constants/routes";

const HomeButtons = () =>
{
	const history = useHistory();

	const redirectToLogin = () =>
	{
		const path = generatePath(routes.LOGIN);

		history.push(path);
	};

	return (
		<Button variant="contained" onClick={redirectToLogin}>Contained</Button>
	);
};

export default HomeButtons;