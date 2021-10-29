import Background from "../components/General/Background"
import Header from "../components/General/Header"
import { TextField, Button } from '@mui/material/';
import { useState } from "react";
import { findAdmin } from "../services/admin";



const Login = () => {
    const onSubmitHandler=async(event)=>{
        event.preventDefault()
        const x = await findAdmin(formState);
        console.log(x)
    }
    const [formState, setFormState] = useState({ username: "", password: "" });
    return (<Background>
        <Header></Header>
        <form onSubmit={onSubmitHandler} >
        <TextField 
            name={"Username"}
            stateName="username"
            // setValue={setFormState}
            onChange={e => setFormState({ ...formState, username: e.target.value })}
            placeholder={`Username`}
            variant="filled"/>
        <TextField 
            type="password"
            name={"Password"}
            stateName="password"
            // setValue={setFormState}
            onChange={e => setFormState({ ...formState, password: e.target.value })}
            placeholder={`Password`}
            variant="filled"/>
        <Button key="5" type="submit" value="Login" color={"primary"}>
          LogIn
        </Button>
        </form>
        </Background>
    )
}

export default Login
