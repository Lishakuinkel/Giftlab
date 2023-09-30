import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import {useMutation} from "@apollo/client";
import {LOGIN} from "../utils/mutations";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Auth from "../utils/auth"

import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState({username: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }
    // add LOGIN Mutation
    const [login,{error,data}]= useMutation(LOGIN);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: loginState.username, password: loginState.password}
            })
            const token = mutationResponse.data.login.token;

            Auth.login (data.login.token);

            alert('Login successful');

            navigate('/signup');
        } catch (error) {
            console.log(error);
        }
        //authenticateUser();     
    }

    //Handle Login API Integration here
    // const authenticateUser = () => {
    // }



    return (
        <form className="mt-8 space-y-6 w-96 mx-auto">
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />


        </form>
    )
}