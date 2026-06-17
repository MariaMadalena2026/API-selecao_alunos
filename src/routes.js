import { Router } from "express";
import controllerAdministrador from "./controllers/administradorController.js";
import controllerCategoria from "./controllers/categoriaController.js";
import controllerCurso from "./controllers/cursoController.js";
import controllerNotas from "./controllers/notasController.js";
import controllerAlunos from "./controllers/alunosController.js";
import controllerRegras from "./controllers/regrasController.js";
import controllerResultado from "./controllers/controllerResultado.js";

const router = Router();
router.post("/administradores", controllerAdministrador.Inserir)
router.get("/administradores", controllerAdministrador.Listar)
router.put("/administradores/:login", controllerAdministrador.Editar)
router.delete("/administradores/:login", controllerAdministrador.Excluir)
router.post("/login", controllerAdministrador.Login)

router.post("/categorias", controllerCategoria.Inserir)
router.get("/categorias", controllerCategoria.Listar)
router.put("/categorias/:id", controllerCategoria.Editar)
router.delete("/categorias/:id", controllerCategoria.Excluir)

router.post("/cursos", controllerCurso.Inserir)
router.get("/cursos", controllerCurso.Listar)
router.put("/cursos/:id", controllerCurso.Editar)
router.delete("/cursos/:id", controllerCurso.Excluir)

router.post("/notas", controllerNotas.Inserir)
router.get("/notas", controllerNotas.Listar)
router.get("/notas/:aluno_cpf", controllerNotas.BuscarPorCpf)
router.put("/notas/:aluno_cpf", controllerNotas.Editar)
router.delete("/notas/:aluno_cpf", controllerNotas.Excluir)

router.post("/alunos", controllerAlunos.Inserir)
router.get("/alunos", controllerAlunos.Listar)
router.put("/alunos/:cpf", controllerAlunos.Editar)
router.delete("/alunos/:cpf", controllerAlunos.Excluir)
router.get("/calcular-medias", controllerAlunos.CalcularMedias);
router.get("/alunos/:cpf", controllerAlunos.BuscarPorCpf)

router.post("/regras", controllerRegras.Inserir)
router.get("/regras", controllerRegras.Listar)
router.put("/regras/:id", controllerRegras.Editar)
router.delete("/regras/:id", controllerRegras.Excluir)

router.get(
    "/resultado/pdf",
    controllerResultado.GerarPDF
);

export default router;