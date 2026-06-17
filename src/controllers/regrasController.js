import serviceRegras from "../services/serviceRegras.js";
async function Listar(req, res){
    const regras = await serviceRegras.Listar();
    res.status(200).json({regras});        
}

async function Inserir(req, res) {
    const {descricao, quantidade} = req.body;  
    console.log(descricao, quantidade)   
    const regra = await serviceRegras.Inserir(descricao, quantidade) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const id = req.params.id;
    const {descricao, quantidade} = req.body;     
    const regra = await serviceRegras.Editar(descricao, quantidade, id) 
    res.status(200).json(regra) 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    const regra = await serviceRegras.Excluir(id) 
    res.status(200).json(regra) 
}

export default {Listar, Inserir, Editar, Excluir}