import Background from "../components/General/Background";
import Header from "../components/General/Header";
import {TextField, Button} from '@mui/material/';
import {useState} from "react";
import {findUser} from "../services/user";

const Login = () =>
{
	const onSubmitHandler = async (event) =>
	{
		event.preventDefault();

		await findUser(formState);
	};

	const [formState, setFormState] = useState({username: "", password: ""});

	return (<Background>
		<Header></Header>
		<form onSubmit={onSubmitHandler} >
			<TextField
				name={"Username"}
				onChange={e => setFormState({...formState, username: e.target.value})}
				placeholder={`Username`}
				variant="filled"
				required />
			<TextField
				type="password"
				name={"Password"}
				onChange={e => setFormState({...formState, password: e.target.value})}
				placeholder={`Password`}
				variant="filled"
				autoComplete="off"
				required />
			<Button variant="outlined" key="5" type="submit" value="Login" color={"primary"}>
				LogIn
			</Button>
		</form>
	</Background>
	);
};

export default Login;