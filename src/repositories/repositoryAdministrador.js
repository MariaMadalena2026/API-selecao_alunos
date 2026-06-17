import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM administrador";
    const [administradores] = await con.query(sql);
    return administradores;
}

async function Inserir(login, nome, senha){
    let sql = "INSERT INTO administrador(login, nome, senha) VALUES (?, ?, ?)";
    const [administradores] = await con.query(sql, [login, nome, senha]);
    return administradores;
}
async function Editar(nome, senha, login){
    let sql = "UPDATE administrador SET nome=?, senha=? WHERE login=?";
    const [administradores] = await con.query(sql, [nome, senha, login]);
    return {login};
}

async function Excluir(login){
    let sql = "DELETE FROM administrador WHERE login=?";
    const [administradores] = await con.query(sql, [login]);
    return {mensagem:"administrador excluído"};
}

async function BuscarPorLogin(login){

let sql = "SELECT * FROM administrador WHERE login = ?";

const [administrador] = await con.query(sql, [login]);

return administrador[0];

}
export default {Listar, Inserir, Editar, Excluir, BuscarPorLogin}
