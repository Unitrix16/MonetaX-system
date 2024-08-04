import React, { useState } from 'react';
import "./styles.css"
import Input from '../Input';
import Button from '../Button';


function SignUpSignInComponent() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");

  const function1 = ()=>{
    console.log('eerr')
  }



  return (
    <div className='signup-wrapper'>
      <h2 className='title'>Sign up on <span style={{color: "var(--theme)"}}>Financely.</span>
      </h2>
      <form>
        <Input 
        label={"Full Name"}
        state={name}
        setState={setName}
        placeholder={"Tanishk kushwah"}/>

<Input 
        label={"Email"}
        state={email}
        setState={setEmail}
        placeholder={"tanishk@gmail.com"}/>

<Input 
        label={"Password"}
        state={password}
        setState={setPassword}
        placeholder={"Example@123"}/>

<Input 
        label={"Confirm Password"}
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder={"Example@123"}/>

<Button 
        text={"Signup using Email and Password"} 
        btnFunction ={()=>console.log("hiiiiiii")}
        />
      </form>
    </div>
  )
}

export default SignUpSignInComponent;
