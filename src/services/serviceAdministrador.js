import repoAdministrador from "../repositories/repositoryAdministrador.js";
async function Listar(){
    const administradores = await repoAdministrador.Listar();  
    return administradores;    
}

async function Inserir(login, nome, senha){
    const administrador = await repoAdministrador.Inserir(login, nome, senha);
    return administrador;
}

async function Editar(nome, senha, login){
    const administrador = await repoAdministrador.Editar(nome, senha, login);
    return administrador;
}
async function Excluir(login){
    const administrador = await repoAdministrador.Excluir(login);
    return administrador;
}

async function Login(login){
const administrador = await repoAdministrador.BuscarPorLogin(login);
return administrador;
}
export default {Listar, Inserir, Editar, Excluir, Login}