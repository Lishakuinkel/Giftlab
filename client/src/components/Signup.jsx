import React, { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import {useMutation} from "@apollo/client";
import {ADD_USER} from "../utils/mutations";
import Auth from "../utils/auth";


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});
  const [addUser,{error}] = useMutation(ADD_USER);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(signupState)

      let mutationResponse = await addUser({
        variables: {
          email: signupState.email, password: signupState.password,
          username: signupState.username
        }
      })

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);

    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
          </form>
        )
    }

