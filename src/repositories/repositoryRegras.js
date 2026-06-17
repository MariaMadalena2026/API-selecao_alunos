import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM regras";
    const [regras] = await con.execute(sql);
    return regras;
}

async function Inserir(descricao, quantidade){
    let sql = "INSERT INTO regras(descricao, quantidade) VALUES (?, ?)";
    const [regras] = await con.query(sql, [descricao, quantidade]);
    return regras;
}
async function Editar(descricao, quantidade, id){
    let sql = "UPDATE regras SET descricao=?, quantidade=? WHERE id=?";
    const [regra] = await con.query(sql, [descricao, quantidade, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM regras WHERE id=?";
    const [regra] = await con.query(sql, [id]);
    return {mensagem:"regra excluída"};
}

export default {Listar, Inserir, Editar, Excluir}