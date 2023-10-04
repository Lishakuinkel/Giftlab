import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from '../../utils/auth';

import { signupFields } from "../../constants/formFields"
import FormAction from "../Form/FormAction";
import Input from "../Form/Input";

const fields=signupFields;

let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});
  
   // Set up our mutation with an option to handle errors
  const [addUser,{ error }] = useMutation(ADD_USER);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(signupState);
  
    // On form submit, perform mutation and pass in form data object as arguments
    try{
      const { data } = await addUser({
        variables: {
          ...signupState
        }
      })
      console.log(data);
      
      Auth.login(data.addUser.token);

      navigate('/login');
      
    }
    catch(error){
      console.log(error)
    }
  }

    return(
        <form className="mt-8 space-y-6 w-96 mx-auto" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
              <FormAction handleSubmit={handleSubmit} text="Signup"> </FormAction>
            </div>            
    
          </form>
        )
    }