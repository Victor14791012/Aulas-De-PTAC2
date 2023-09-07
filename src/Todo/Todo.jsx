import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



import './todo.css';

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [forca, setForca] = useState("");
    const [imagem, setImagem] = useState("");
    const [Lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [editandoId, setEditandoId] = useState(null);

    const salvar = (e) => {
        e.preventDefault();

       /* if (!atividade || !descricao || !forca || !imagem) {
            alert("Por favor, preencha todos os campos antes de adicionar.");
            return;
        } */

        if (editandoId === null) {
            // Adicionar um novo objeto
            setLista([...Lista, {
                atividade: atividade,
                descricao: descricao,
                forca: forca,
                imagem: imagem,
                id: id
            }]);
            setId(id + 1);
        } else {
            // Editar um objeto existente
            const novaLista = Lista.map((ativ) =>
                ativ.id === editandoId
                    ? {
                          ...ativ,
                          atividade: atividade,
                          descricao: descricao,
                          forca: forca,
                          imagem: imagem,
                      }
                    : ativ
            );
            setLista(novaLista);
            setEditandoId(null);
        }

        setAtividade("");
        setDescricao("");
        setForca("");
        setImagem("");
    };

    const editar = (idEditar) => {
        const objetoParaEditar = Lista.find((ativ) => ativ.id === idEditar);
        setEditandoId(idEditar);
        setAtividade(objetoParaEditar.atividade);
        setDescricao(objetoParaEditar.descricao);
        setForca(objetoParaEditar.forca);
        setImagem(objetoParaEditar.imagem);
    };

    const deletar = (idToDelete) => {
        const novaLista = Lista.filter((ativ) => ativ.id !== idToDelete);
        setLista(novaLista);
    };

    const deletarTodos = () => {
        setLista([]);
    };

    return (   
        <div className="container " id="transparente">
            <Link to="/home">Home</Link> 
            <div className="bg-dark text-white rounded-2 p-2">
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
                        <input type="number" className="form-control" id="forca" value={forca} onChange={(e) => setForca(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagem" className="form-label">Imagem (PNG ou JPG)</label>
                        <input type="file" className="form-control" id="imagem" accept=".png, .jpg, .jpeg" onChange={(e) => setImagem(e.target.files[0])} />
                    </div>
                    <button className="btn btn-primary">{editandoId === null ? 'ADD' : 'Salvar Edição'}</button>
                    <button className="btn btn-danger mx-2" onClick={deletarTodos}> DEL <i className="bi  bi-trash"></i> </button>
                   
                    
 

                </form>
                
            </div>

            <div className="row m-2">
                {Lista.map((ativ) => (
                    <div key={ativ.id} className="col-md-4">
                        <div className="card-jogo mb-4 zoom shadow-lg colorful-border" id="card-meu">
                            <img src={ativ.imagem && URL.createObjectURL(ativ.imagem)} className="card-img-top" alt="Imagem" />
                            <div className="card-body">
                                <h5 className="card-title">{ativ.atividade}</h5>
                                <h6 className="card-text">Descrição: {ativ.descricao}</h6>
                                <p className="card-text forca-destaque">Força: {ativ.forca}  </p>
                                <button className="btn btn-danger butao float-right" onClick={() => deletar(ativ.id)}>
                                    <i className="bi bi-trash"></i> DEL
                                </button>
                                <button className="btn btn-info butao float-right mx-2" onClick={() => editar(ativ.id)}>
                                    <i className="bi bi-pencil"></i> Editar
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
}
