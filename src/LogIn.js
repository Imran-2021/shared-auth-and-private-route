import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './Firebase.Config';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import { userContext } from './App';
initializeApp(firebaseConfig);

const LogIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const history =useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({
        isSignIn:false,
        name:"",
        email:"",
        photo:""
      })
     
      const auth = getAuth();
    const {name,email,photo,isSignIn} = user;
    const handleSignIn=()=>{
      signInWithPopup(auth, provider)
        .then((result) => {
          const {displayName,email,photoURL} = result.user;
          const singnInUser = {
            isSignIn:true,
            name: displayName,
            email: email,
            photo: photoURL,
          }
          setUser(singnInUser)
          setLoggedInUser(singnInUser)
          history.replace(from);
    
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    }
    return (
        <div>
            <div style={{padding: '10px', margin:"20px"}}>
    <h3>Need to sigin first </h3>
    {/* <button onClick={handleSignIn} style={{cursor:"pointer"}}>Sign In with Google</button>
    <button style={{marginLeft:"10px"}} onClick={()=>setUser(" ")}>signout</button> <br /> */}
 <button onClick={handleSignIn} style={{cursor:"pointer"}}>Sign In with Google</button> or go back to -
    <Link style={{marginLeft:"10px"}} to="/home"><button>home</button></Link>
    
    </div>
        </div>
    );
};

export default LogIn;