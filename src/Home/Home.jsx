import { useState } from "react";
import {Link} from "react-router-dom";


export default function Home(){
   
    return (
        
            <div className="container pt-2 transparente text-white text-center">
                <h2 className="pt-5 ">Faça a sua Lista de Personagems geek</h2>
        
                <Link to="/todo" className="btn btn-danger">Montar sua Lista</Link>

                <img src="https://odiariodemogi.net.br/image/policy:1.52979.1658526933:1658526933/image.jpg?f=2x1&w=1200" alt="Variedades de comidas saltando em fundo branco" className="img-fluid mt-3" />
            </div>
       
    );
}