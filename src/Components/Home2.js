import React from 'react';
import { Link } from 'react-router-dom';

const Home2 = () => {
    return (
        <div style={{margin:"20px"}}>
            <h2>this is <span style={{color:"red"}}>home - 2</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nulla quos ex inventore iusto aliquid ipsum. Repellat ipsa veritatis quibusdam cupiditate est recusandae facilis delectus numquam praesentium ipsam. Laudantium, nesciunt.</p>
            <br />
            <hr />
            <br />
            <Link to="/home"><button>home</button></Link>
            <Link  style={{marginLeft:"10px"}} to="/home3"><button>home -3</button></Link>
        </div>
    );
};

export default Home2;