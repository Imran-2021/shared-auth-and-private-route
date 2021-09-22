import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{margin:"20px"}}>
            <h2>this is <span style={{color:"red"}}>home</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi veniam ipsam harum vel modi ab? Reprehenderit tempora dicta nihil explicabo veniam? Fuga, doloremque totam! Vero ratione aperiam est corporis non.</p>
            <br />
            <hr />
            <br />
            <Link to="/home2"><button>home -2</button></Link>
            <Link  style={{marginLeft:"10px"}} to="/home3"><button>home -3</button></Link>
        </div>
    );
};

export default Home;