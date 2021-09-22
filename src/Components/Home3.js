import React from 'react';
import { Link } from 'react-router-dom';

const Home3 = () => {
    return (
        <div style={{margin:"20px"}}>
            <h2>this is <span style={{color:"red"}}>home - 3</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem laborum voluptatibus, dicta culpa odit perspiciatis natus nemo eligendi quaerat saepe adipisci illum enim harum voluptas accusantium ipsum quasi repudiandae.</p>
             <br />
            <hr />
            <br />
            <Link to="/home"><button>home</button></Link>
            <Link style={{marginLeft:"10px"}} to="/home2"><button>home -2</button></Link>
            
        </div>
    );
};

export default Home3;