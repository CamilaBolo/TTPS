import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {routes} from './constants/routes';
import Home from "./pages/Home";
import Login from "./pages/Login";

function App()
{
	return (
		<div className="App">
			<Switch>
				<Route>
					<Route path="/" exact>
						<Redirect to={routes.HOME} />
					</Route>
					<Route path={routes.HOME}>
						<Home />
					</Route>
					<Route path={routes.LOGIN}>
						<Login />
					</Route>
				</Route>
			</Switch>
		</div>
	);
}

export default App;