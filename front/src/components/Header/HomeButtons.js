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

	const redirectToPacientes = () =>
	{
		const path = generatePath(routes.PACIENTES);

		history.push(path);
	};

	const redirectToEstudios = () =>
	{
		const path = generatePath(routes.ESTUDIOS);

		history.push(path);
	};

	return (
		<>
			<Button onClick={redirectToPacientes}>Pacientes</Button>
			<Button onClick={redirectToEstudios}>Estudios</Button>
			<Button variant="contained" onClick={redirectToLogin}>Log In</Button>
		</>
	);
};

export default HomeButtons;