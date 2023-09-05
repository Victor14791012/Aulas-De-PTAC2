import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css';

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [forca, setForca] = useState("");
    const [imagem, setImagem] = useState("");
    const [Lista, setLista] = useState([]);
    const [id, setId] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...Lista, {
            atividade: atividade,
            descricao: descricao,
            forca: forca,
            imagem: imagem,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setDescricao("");
        setForca("");
        setImagem("");
    };

    const deletar = (idToDelete) => {
        const novaLista = Lista.filter((ativ) => ativ.id !== idToDelete);
        setLista(novaLista);
    };

    return (   
        <div className="container" id="transparente">
            <Link to="/home">Home</Link> 
            <div className="bg-white rounded-2 p-2">
                <h1>Portal Geek</h1>  
                <h6>Adicione seus personagens favoritos</h6>
                
                <form onSubmit={salvar}>
                    <div className="mb-3">
                        <label htmlFor="atividade" className="form-label">Nome (personagem)</label>
                        <input type="text" className="form-control" id="atividade" value={atividade} onChange={(e) => setAtividade(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição (personagem)</label>
                        <input type="text" className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forca" className="form-label">Força (personagem)</label>
                        <input type="text" className="form-control" id="forca" value={forca} onChange={(e) => setForca(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagem" className="form-label">Imagem (PNG ou JPG)</label>
                        <input type="file" className="form-control" id="imagem" accept=".png, .jpg, .jpeg" onChange={(e) => setImagem(e.target.files[0])} />
                    </div>
                    <button className="btn btn-primary">ADD</button>
                </form>
            </div>

            <div className="row m-2">
                {Lista.map((ativ) => (
                    <div key={ativ.id} className="col-md-4">
                        <div className="card mb-4" id="card-meu">
                            <img src={ativ.imagem && URL.createObjectURL(ativ.imagem)} className="card-img-top" alt="Imagem" />
                            <div className="card-body">
                                <h5 className="card-title">{ativ.atividade}</h5>
                                <p className="card-text">Descrição: {ativ.descricao}</p>
                                <p className="card-text">Força: {ativ.forca}</p> {/* Correção aqui */}
                                <button className="btn btn-danger" onClick={() => deletar(ativ.id)}>DEL</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
}
