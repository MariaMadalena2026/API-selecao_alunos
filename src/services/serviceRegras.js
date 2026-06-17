import repoRegras from "../repositories/repositoryRegras.js";
async function Listar(){
    const regras = await repoRegras.Listar();  
    return regras;    
}

async function Inserir(descricao, quantidade){
    const regra = await repoRegras.Inserir(descricao, quantidade);
    return regra;
}

async function Editar(descricao, quantidade, id){
    const regra = await repoRegras.Editar(descricao, quantidade, id);
    return regra;
}
async function Excluir(id){
    const regra = await repoRegras.Excluir(id);
    return regra;
}

export default {Listar, Inserir, Editar, Excluir}