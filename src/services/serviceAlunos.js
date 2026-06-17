import repoAlunos from "../repositories/repositoryAlunos.js";
async function Listar(){
    const alunos = await repoAlunos.Listar();  
    return alunos;    
}

async function Inserir(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id){
    const aluno = await repoAlunos.Inserir(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id);
    return aluno;
}

async function Editar(nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id, cpf){
    const aluno = await repoAlunos.Editar(nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id, cpf);
    return aluno;
}
async function Excluir(cpf){
    const aluno = await repoAlunos.Excluir(cpf);
    return aluno;
}

import pool from "../database/connection.js";;

async function calcularMedias() {

    // 🔥 PUXA ALUNOS + NOTAS JUNTOS
    const [dados] = await pool.query(`
        SELECT a.cpf, n.*
        FROM alunos a
        JOIN notas n ON a.cpf = n.aluno_cpf
    `);

    // 🔥 PERCORRE CADA ALUNO
    for (let aluno of dados) {

        let soma = 0;
        let total = 0;

        // 🔥 PERCORRE TODAS AS COLUNAS
        for (let campo in aluno) {

            if (campo.includes("ano") && aluno[campo] != null) {
                soma += Number(aluno[campo]);
                total++;
            }
        }

        let media = total > 0 ? soma / total : 0;

        // 🔥 ATUALIZA NO BANCO
        await pool.query(
            "UPDATE alunos SET media = ? WHERE cpf = ?",
            [media, aluno.cpf]
        );
    }

    return "Médias calculadas com sucesso";
}

async function BuscarPorCpf(cpf){
    return await repoAlunos.BuscarPorCpf(cpf);
}

export default {Listar, Inserir, Editar, Excluir, calcularMedias, BuscarPorCpf}