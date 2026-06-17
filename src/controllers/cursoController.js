import serviceCurso from "../services/serviceCurso.js";
async function Listar(req, res){
    const cursos = await serviceCurso.Listar();
    res.status(200).json({cursos});        
}

async function Inserir(req, res) {
    const {descricao} = req.body;  
    console.log(descricao)   
    const curso = await serviceCurso.Inserir(descricao) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const id = req.params.id;
    const {descricao} = req.body;     
    const curso = await serviceCurso.Editar(descricao, id) 
    res.status(200).json(curso) 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    const curso = await serviceCurso.Excluir(id) 
    res.status(200).json(curso) 
}

export default {Listar, Inserir, Editar, Excluir}