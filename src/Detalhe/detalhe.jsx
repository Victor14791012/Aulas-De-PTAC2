import { useState } from "react";
import {Link} from "react-router-dom";


export default function Detalhe(){
   const {id}=useParams();

    return (
        
            <div className="container pt-2 transparente text-white ">
                <Link to="/" className="link">Home</Link>
                <h2 className="pt-5 text-center">Detalhes{id}</h2>
        
                

                
            </div>
       
    );
}