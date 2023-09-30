import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { loginFields } from "../../constants/formFields";
import Input from "../Form/Input";
import FormAction from "../Form/FormAction";
import FormExtra from "../Form/FormExtra";

const fields = loginFields;
let fieldsState = {};

//clear form values
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    //const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const [login, { error, data }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value,
        });
    };

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loginState);

        try {
            const { data } = await login({
                variables: { ...loginState },
              });
        
              Auth.login(data.login.token);

              
            } catch (e) {
              console.error(e);
              navigate('/');
            }


    return (
        <form className="mt-8 space-y-6 w-96 mx-auto" onSubmit={handleSubmit}>
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
}}
