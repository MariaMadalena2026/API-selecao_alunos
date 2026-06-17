import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM curso";
    const [cursos] = await con.execute(sql);
    return cursos;
}

async function Inserir(descricao){
    let sql = "INSERT INTO curso(descricao) VALUES (?)";
    const [cursos] = await con.query(sql, [descricao]);
    return cursos;
}
async function Editar(descricao, id){
    let sql = "UPDATE curso SET descricao=? WHERE id=?";
    const [cursos] = await con.query(sql, [descricao, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM curso WHERE id=?";
    const [cursos] = await con.query(sql, [id]);
    return {mensagem:"curso excluído"};
}

export default {Listar, Inserir, Editar, Excluir}
