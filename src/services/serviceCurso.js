import repoCurso from "../repositories/repositoryCurso.js";
async function Listar(){
    const cursos = await repoCurso.Listar();  
    return cursos;    
}

async function Inserir(descricao){
    const curso = await repoCurso.Inserir(descricao);
    return curso;
}

async function Editar(descricao, id){
    const curso = await repoCurso.Editar(descricao, id);
    return curso;
}
async function Excluir(id){
    const curso = await repoCurso.Excluir(id);
    return curso;
}

export default {Listar, Inserir, Editar, Excluir}