import React, { useState } from "react";
import { UserLoginFormConfig, CustomElementRenderer } from "./config";

const LoginForm = () => {

  const [state, setState] = useState({});
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
     e.preventDefault(); 
     setFormData(state);
  }

  const handleOnChange = (name,value ) => {
     setState(prevState => ({
        ...prevState,  
      [name]: value  
     }));
  }
 return (
    <div>
        <form onSubmit={handleFormSubmit}>     
        {
            UserLoginFormConfig.map((obj) => {
            return <CustomElementRenderer
             key={obj.name}
             obj={obj} 
             onChangeFunc={handleOnChange}
            />
            })
        }   
        </form> 
        <span><h3>Data submitted: </h3>{JSON.stringify(formData)}</span>
    </div>
  );
}

export default LoginForm;