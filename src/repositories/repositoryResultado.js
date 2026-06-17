import con from "../database/connection.js";

async function BuscarClassificacao() {

    const sql = `
        SELECT
            CONCAT(a.nome,' ',a.sobrenome) AS nome,
            a.data_nascimento,
            a.media,
            a.categoria_id,
            c.descricao AS curso,
            r.vagas
        FROM alunos a
        INNER JOIN curso c
            ON c.id = a.curso_id
        INNER JOIN regras r
            ON r.categoria_id = a.categoria_id
        ORDER BY
            a.curso_id,
            a.categoria_id,
            a.media DESC,
            a.data_nascimento ASC
    `;

    const [dados] = await con.query(sql);

    return dados;
}

export default { BuscarClassificacao };