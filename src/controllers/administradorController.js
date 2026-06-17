import serviceAdministrador from "../services/serviceAdministrador.js";
async function Listar(req, res){
    const administradores = await serviceAdministrador.Listar();
    res.status(200).json({administradores});        
}

async function Inserir(req, res) {
    const {login, nome, senha} = req.body;  
    console.log(login,nome,senha)   
    const administrador = await serviceAdministrador.Inserir(login, nome, senha) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const login = req.params.login;
    const {nome, senha} = req.body;     
    const administrador = await serviceAdministrador.Editar(nome, senha, login) 
    res.status(200).json(administrador) 
}

async function Excluir(req, res) {
    const login = req.params.login;
        
    const administrador = await serviceAdministrador.Excluir(login) 
    res.status(200).json(administrador) 
}

async function Login(req, res){

const {login, senha} = req.body;

const administrador = await serviceAdministrador.Login(login);

if(!administrador){
return res.status(404).json({mensagem:"Usuário não encontrado"});
}

if(administrador.senha !== senha){
return res.status(401).json({mensagem:"Senha incorreta"});
}

res.status(200).json({
mensagem:"Login realizado com sucesso",
administrador
});

}

export default {Listar, Inserir, Editar, Excluir, Login}