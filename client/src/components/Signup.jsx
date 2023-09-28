import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import {useMutation} from "@apollo/client";
import {ADD_USER} from "../utils/mutations";


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
    try{
      const {data} = await addUser({
        variables: {
          ...signupState
        }
      })
      console.log(data);
    }
    catch(error){
      console.log(error)
    }
  }

  //handle Signup API Integration here
  const createAccount=()=>{

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
              <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
    
             
    
          </form>
        )
    }