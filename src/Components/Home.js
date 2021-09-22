import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory()
    const handleGO=()=>{
        history.push('/home2')
    }
    return (
        <div style={{margin:"20px"}}>
            <h2>this is <span style={{color:"red"}}>home</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi veniam ipsam harum vel modi ab? Reprehenderit tempora dicta nihil explicabo veniam? Fuga, doloremque totam! Vero ratione aperiam est corporis non.</p>
            <br />
            <hr />
            <br />
            {/* <Link to="/home2"><button>home -2</button></Link> */}
            {/* <Link   to="/home3"><button>home -3</button></Link> */}
            {/* <Link to="/logIn" style={{marginLeft:"10px"}}><button>LogIn form</button></Link> */}
         
            <button style={{marginLeft:"10px"}} onClick={handleGO}>home2</button>
        </div>
    );
};

export default Home;