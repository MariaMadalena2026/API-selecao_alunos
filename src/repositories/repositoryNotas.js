import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM notas";
    const [notas] = await con.execute(sql);
    return notas;
}

async function Inserir(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano){
    let sql = "INSERT INTO notas(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const [notas] = await con.query(sql, [aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano]);
    return notas;
}
async function Editar(portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano, aluno_cpf){
    let sql = "UPDATE notas SET portugues_6ano=?, matematica_6ano=?, historia_6ano=?, geografia_6ano=?, ciencias_6ano=?, artes_6ano=?, ens_religioso_6ano=?, ingles_6ano=?, ed_fisica_6ano=?, portugues_7ano=?, matematica_7ano=?, historia_7ano=?, geografia_7ano=?, ciencias_7ano=?, artes_7ano=?, ens_religioso_7ano=?, ingles_7ano=?, ed_fisica_7ano=?, portugues_8ano=?, matematica_8ano=?, historia_8ano=?, geografia_8ano=?, ciencias_8ano=?, artes_8ano=?, ens_religioso_8ano=?, ingles_8ano=?, ed_fisica_8ano=?, portugues_9ano=?, matematica_9ano=?, historia_9ano=?, geografia_9ano=?, ciencias_9ano=?, artes_9ano=?, ens_religioso_9ano=?, ingles_9ano=?, ed_fisica_9ano=? WHERE aluno_cpf=?";
    const [notas] = await con.query(sql, [portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano, aluno_cpf]);
    return {aluno_cpf};
}

async function Excluir(aluno_cpf){
    let sql = "DELETE FROM notas WHERE aluno_cpf=?";
    const [notas] = await con.query(sql, [aluno_cpf]);
    return {mensagem:"notas excluídas"};
}

async function BuscarPorCpf(aluno_cpf){

    const sql =
    "SELECT * FROM notas WHERE aluno_cpf = ?";

    const [rows] =
    await con.query(sql, [aluno_cpf]);

    return rows[0];
}

export default {Listar, Inserir, Editar, Excluir, BuscarPorCpf}