import React, { useContext, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from "../App";
import "./Shippment.css"
const Shippment = () => {
    const [state,setState]=useState({})
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    //   console.log(data)
      setState(data)
    //   console.log(state);
};

 
    return (
        <>
    <div className="formTop">
    <p>this is Shippment page.</p>
    {
      state.Email &&  <div><p>{state.Name}</p>
        <p>{state.Email}</p>
        <p>{state.Mobile}</p>
        <p>{state.Address}</p></div>
    }
            <br />
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name : </p>
      <input readOnly defaultValue={loggedInUser.name} {...register("Name", { required: true })} />
      {errors.Name && <span>This field is required</span>}
      <p>Email : </p>
      <input readOnly defaultValue={loggedInUser.email} {...register("Email", { required: true })} />
      {errors.Email && <span>This field is required</span>}
      <p>Address :</p>
      <input type="text" placeholder="Address" {...register("Address", { required: true })} />
      {errors.Address && <span>This field is required</span>}
      <p>Phone Number</p>
      <input type="tel"  placeholder="phone Number" {...register("Mobile", { required: true })} />
      {errors.Mobile && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </div>
        <div style={{margin:"20px"}}> 
            
            <Link to="/home"><button>home</button></Link><Link to="/home2"><button  style={{marginLeft:"10px"}}>home2</button></Link>
        </div> 
        </>
    );
};

export default Shippment;