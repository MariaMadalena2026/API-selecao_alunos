import serviceAlunos from "../services/serviceAlunos.js";
async function Listar(req, res){
    const alunos = await serviceAlunos.Listar();
    res.status(200).json({alunos});        
}

async function Inserir(req, res) {
    const {cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id} = req.body;  
    console.log(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id)   
    const aluno = await serviceAlunos.Inserir(cpf, nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const cpf = req.params.cpf;
    const {nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id} = req.body;     
    const aluno = await serviceAlunos.Editar(nome, sobrenome, data_nascimento, telefone, categoria_id, curso_id, cpf) 
    res.status(200).json(aluno) 
}

async function Excluir(req, res) {
    const cpf = req.params.cpf;
        
    const aluno = await serviceAlunos.Excluir(cpf) 
    res.status(200).json(aluno) 
}

async function CalcularMedias(req, res){
    try {
        const resultado = await serviceAlunos.calcularMedias();
        res.json({ mensagem: resultado });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao calcular médias" });
    }
}

async function BuscarPorCpf(req, res) {
    const cpf = req.params.cpf;

    const aluno = await serviceAlunos.BuscarPorCpf(cpf);

    if(aluno){
        res.json(aluno);
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
}

export default {Listar, Inserir, Editar, Excluir, CalcularMedias, BuscarPorCpf}