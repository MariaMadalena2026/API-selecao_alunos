import serviceNotas from "../services/serviceNotas.js";
async function Listar(req, res){
    const notas = await serviceNotas.Listar();
    res.status(200).json({notas});        
}

async function Inserir(req, res) {
    const {aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano} = req.body;  
    console.log(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano)   
    const nota = await serviceNotas.Inserir(aluno_cpf, portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const aluno_cpf = req.params.aluno_cpf;
    const {portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano} = req.body;     
    const nota = await serviceNotas.Editar(portugues_6ano, matematica_6ano, historia_6ano, geografia_6ano, ciencias_6ano, artes_6ano, ens_religioso_6ano, ingles_6ano, ed_fisica_6ano, portugues_7ano, matematica_7ano, historia_7ano, geografia_7ano, ciencias_7ano, artes_7ano, ens_religioso_7ano, ingles_7ano, ed_fisica_7ano, portugues_8ano, matematica_8ano, historia_8ano, geografia_8ano, ciencias_8ano, artes_8ano, ens_religioso_8ano, ingles_8ano, ed_fisica_8ano, portugues_9ano, matematica_9ano, historia_9ano, geografia_9ano, ciencias_9ano, artes_9ano, ens_religioso_9ano, ingles_9ano, ed_fisica_9ano, aluno_cpf) 
    res.status(200).json(nota) 
}

async function Excluir(req, res) {
    const aluno_cpf = req.params.aluno_cpf;
        
    const nota = await serviceNotas.Excluir(aluno_cpf) 
    res.status(200).json(nota) 
}

async function BuscarPorCpf(req, res){

    const aluno_cpf = req.params.aluno_cpf;

    const nota = await serviceNotas.BuscarPorCpf(aluno_cpf);

    if(nota){
        res.json(nota);
    }else{
        res.status(404).json({
            mensagem:"Notas não encontradas."
        });
    }
}


export default {Listar, Inserir, Editar, Excluir, BuscarPorCpf}