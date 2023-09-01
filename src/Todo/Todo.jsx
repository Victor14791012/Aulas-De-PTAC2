import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade]= useState("");
    const [Lista, setLista] = useState([]);
    const [id, setId]= useState(1);
    const salvar =(e)=>{
        e.preventDefault();
        setLista([...Lista, {

            atividade: atividade ,
            id:id
            
        }])
        setId(id + 1)
        setAtividade("");
    };

    const deletar =(e)=>{
        setLista([...Lista, {

            atividade: atividade ,
            id:id
            
        }]);
       
       
    };

    return (   
        <div>
            <Link to="/home">home</Link>   
            <h1>Lista de Atividades</h1>  
            

             <form onSubmit={salvar}>
               <input type ="text" value={atividade} onChange={(e) => setAtividade(e.target.value)} />
               <button>ADD</button>
               <button onSubmit={deletar}>DEL</button>
             </form>

            { Lista.map((ativ)=> 
                <div key={ativ.id}>
                      <p> {ativ.atividade} </p>

                </div>  )}
                
        </div>
    );
}