import serviceCategoria from "../services/serviceCategoria.js";
async function Listar(req, res){
    const categorias = await serviceCategoria.Listar();
    res.status(200).json({categorias});        
}

async function Inserir(req, res) {
    const {descricao} = req.body;  
    console.log(descricao)   
    const categoria = await serviceCategoria.Inserir(descricao) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const id = req.params.id;
    const {descricao} = req.body;     
    const categoria = await serviceCategoria.Editar(descricao, id) 
    res.status(200).json(categoria) 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    const categoria = await serviceCategoria.Excluir(id) 
    res.status(200).json(categoria) 
}

export default {Listar, Inserir, Editar, Excluir}