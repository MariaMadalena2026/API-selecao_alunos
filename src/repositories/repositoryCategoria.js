import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM categoria";
    const [categorias] = await con.execute(sql);
    return categorias;
}

async function Inserir(descricao){
    let sql = "INSERT INTO categoria(descricao) VALUES (?)";
    const [categorias] = await con.query(sql, [descricao]);
    return categorias;
}
async function Editar(descricao, id){
    let sql = "UPDATE categoria SET descricao=? WHERE id=?";
    const [categorias] = await con.query(sql, [descricao, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM categoria WHERE id=?";
    const [categorias] = await con.query(sql, [id]);
    return {mensagem:"categoria excluída"};
}

export default {Listar, Inserir, Editar, Excluir}