import repoNotas from "../repositories/repositoryNotas.js";
async function Listar(){
    const notas = await repoNotas.Listar();  
    return notas;    
}

async function Inserir(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano){
    const nota = await repoNotas.Inserir(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano);
    return nota;
}

async function Editar(portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano, aluno_cpf){
    const nota = await repoNotas.Editar(portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano, aluno_cpf);
    return nota;
}
async function Excluir(aluno_cpf){
    const nota = await repoNotas.Excluir(aluno_cpf);
    return nota;
}

async function BuscarPorCpf(aluno_cpf){
    return await repoNotas.BuscarPorCpf(aluno_cpf);
}

export default {Listar, Inserir, Editar, Excluir, BuscarPorCpf}