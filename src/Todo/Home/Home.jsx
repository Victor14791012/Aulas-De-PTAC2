import { useState } from "react";
import {Link} from "react-router-dom";

export default function Home(){
   
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">Todo</Link>
             {/*xxx
            <button onClick={() => { setCount(count+1)}}> Contar </button>
            <button onClick={() => { setCount( 0)}}> Zerar </button>
            <p>{count}</p>
    */}  
        </div>
    );
}