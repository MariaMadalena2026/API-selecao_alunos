import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT a.*, c.descricao AS curso FROM alunos a LEFT JOIN curso c ON a.curso_id = c.id;"
    const [alunos] = await con.execute(sql);
    return alunos;
}

async function Inserir(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id){
    let sql = "INSERT INTO alunos(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [alunos] = await con.query(sql, [cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id]);
    return alunos;
}
async function Editar(nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id, cpf){
    let sql = "UPDATE alunos SET nome=?, sobrenome=?, data_nascimento=?, telefone=?, categoria_id=?, curso_id=? WHERE cpf=?";
    const [alunos] = await con.query(sql, [nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id, cpf]);
    return {cpf};
}

async function Excluir(cpf){
    let sql = "DELETE FROM alunos WHERE cpf=?";
    const [alunos] = await con.query(sql, [cpf]);
    return {mensagem:"aluno excluído"};
}

async function atualizarMedia(cpf, media){
    const sql = "UPDATE alunos SET media = ? WHERE cpf = ?";
    await con.query(sql, [media, cpf]);
}

async function BuscarPorCpf(cpf){
    const sql = "SELECT * FROM alunos WHERE cpf = ?";
    const [rows] = await con.query(sql, [cpf]);

    return rows[0];
}

export default {Listar, Inserir, Editar, Excluir, atualizarMedia, BuscarPorCpf}
