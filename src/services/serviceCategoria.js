import repoCategoria from "../repositories/repositoryCategoria.js";
async function Listar(){
    const categorias = await repoCategoria.Listar();  
    return categorias;    
}

async function Inserir(descricao){
    const categoria = await repoCategoria.Inserir(descricao);
    return categoria;
}

async function Editar(descricao, id){
    const categoria = await repoCategoria.Editar(descricao, id);
    return categoria;
}
async function Excluir(id){
    const categoria = await repoCategoria.Excluir(id);
    return categoria;
}

export default {Listar, Inserir, Editar, Excluir}