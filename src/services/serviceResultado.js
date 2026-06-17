
import PDFDocument from "pdfkit";
import fs from "fs";
import repositoryResultado from "../repositories/repositoryResultado.js";

function desenharCabecalho(
    doc,
    curso,
    corCurso,
    totalInscritos
){

    if(fs.existsSync("./assets/logo.png")){
        doc.image(
            "./assets/logo.png",
            40,
            20,
            {
                width: 60
            }
        );
    }

    doc
        .fillColor("#003366")
        .fontSize(20)
        .font("Helvetica-Bold")
        .text(
            "EEEP PADRE JOÃO BOSCO DE LIMA",
            120,
            30,
            {
                align: "center"
            }
        );

    doc
        .fillColor("black")
        .fontSize(12)
        .font("Helvetica")
        .text(
            "RESULTADO FINAL DA SELEÇÃO",
            {
                align: "center"
            }
        );

    doc
        .moveTo(40, 90)
        .lineTo(555, 90)
        .lineWidth(2)
        .strokeColor(corCurso)
        .stroke();

    doc
    .fillColor(corCurso)
    .fontSize(15)
    .font("Helvetica-Bold")
    .text(
        `CURSO TÉCNICO EM: ${curso.toUpperCase()}`,
        40,
        105,
        {
            width: 515,
            align: "center"
        }
    );

    doc
    .fillColor("black")
    .fontSize(11)
    .font("Helvetica")
    .text(
        `Total de vagas: 45          Total de inscritos: ${totalInscritos}`,
        40,
        135,
        {
            width: 515,
            align: "center"
        }
    );

    doc
        .moveTo(40, 150)
        .lineTo(555, 150)
        .lineWidth(1)
        .strokeColor("#CCCCCC")
        .stroke();

    doc.y = 165;
}

async function GerarPDF(){

    return new Promise(async(resolve,reject)=>{

        const dados =
            await repositoryResultado.BuscarClassificacao();

        const doc =
            new PDFDocument({
                margin:40
            });

        const stream =
            fs.createWriteStream(
                "resultado-final.pdf"
            );

        doc.pipe(stream);

        const cursos = [
            ...new Set(
                dados.map(
                    x => x.curso
                )
            )
        ];

        cursos.forEach((curso,indiceCurso)=>{

            if(indiceCurso > 0){
                doc.addPage();
            }

            let corCurso = "#003366";

            if(
                curso.toUpperCase().includes("AGROPECU")
                ||
                curso.toUpperCase().includes("ENERGIA")
            ){
                corCurso = "#0B7A2A";
            }

            const grupoCurso =
                dados.filter(
                    x => x.curso == curso
                );

            const totalInscritos =
                grupoCurso.length;

            desenharCabecalho(
                doc,
                curso,
                corCurso,
                totalInscritos
            );

            const categorias = [
                ...new Set(
                    grupoCurso.map(
                        x => x.categoria_id
                    )
                )
            ];

            categorias.forEach(cat=>{

                const grupo =
                    grupoCurso.filter(
                        x =>
                        x.categoria_id == cat
                    );

                const vagas =
                    grupo[0]?.vagas || 0;

                let nomeCategoria = "";

                if(cat == 1)
                    nomeCategoria =
                    "Pública - Ampla Concorrência";

                if(cat == 2)
                    nomeCategoria =
                    "Pública - Território";

                if(cat == 3)
                    nomeCategoria =
                    "Privada - Ampla Concorrência";

                if(cat == 4)
                    nomeCategoria =
                    "Privada - Território";

                if(cat == 5)
                    nomeCategoria =
                    "Pessoa com Deficiência";

                doc.moveDown();

                doc
                .fillColor("black")
                .fontSize(12)
                .font("Helvetica-Bold")
                .text(
                `${nomeCategoria}   |   Inscritos: ${grupo.length}   |   Vagas: ${vagas}`,
                40,               // posição X
                doc.y,            // posição Y atual
                {
                width: 515,   // largura da tabela
                align: "center",
                lineBreak: false
            }
        );

                doc.moveDown(0.7);

                const inicioX = 40;
                let y = doc.y;

                doc
                    .fillColor(corCurso)
                    .rect(
                        inicioX,
                        y,
                        515,
                        20
                    )
                    .fill();

                doc
                    .fillColor("white")
                    .fontSize(10)
                    .font("Helvetica-Bold");

                doc.text(
                    "Pos",
                    inicioX + 5,
                    y + 5
                );

                doc.text(
                    "Nome do Candidato",
                    inicioX + 35,
                    y + 5
                );

                doc.text(
                    "Nascimento",
                    inicioX + 250,
                    y + 5
                );

                doc.text(
                    "Média",
                    inicioX + 355,
                    y + 5
                );

                doc.text(
                    "Situação",
                    inicioX + 435,
                    y + 5
                );

                y += 20;

                grupo.forEach(
                    (
                        aluno,
                        index
                    )=>{

                    const situacao =
                        index < vagas
                        ? "Classificado"
                        : "Reserva";

                    const data =
                        new Date(
                            aluno.data_nascimento
                        );

                    const nascimento =
                        data
                        .getDate()
                        .toString()
                        .padStart(
                            2,
                            "0"
                        )
                        + "/"
                        +
                        (
                            data.getMonth()
                            + 1
                        )
                        .toString()
                        .padStart(
                            2,
                            "0"
                        )
                        + "/"
                        +
                        data.getFullYear();

                    let corFundo = "#FFFFFF";

// Se for classificado
if (situacao === "Classificado") {

    // Cursos verdes
    if (
        curso.toUpperCase().includes("AGROPECU") ||
        curso.toUpperCase().includes("ENERGIA")
    ) {
        corFundo = "#ecfaec"; // verde claro
    }

    // Cursos azuis
    else {
        corFundo = "#d8ebfc"; // azul claro
    }
}

// Desenha a linha
doc
    .fillColor(corFundo)
    .rect(
        inicioX,
        y,
        515,
        20
    )
    .fillAndStroke(
        corFundo,
        "#CCCCCC"
    );

                    doc
                        .fillColor(
                            "black"
                        )
                        .fontSize(9)
                        .font(
                            "Helvetica"
                        );

                    doc.text(
                        (
                            index + 1
                        ).toString(),
                        inicioX + 5,
                        y + 5
                    );

                    doc.text(
                        aluno.nome,
                        inicioX + 35,
                        y + 5,
                        {
                            width:200
                        }
                    );

                    doc.text(
                        nascimento,
                        inicioX + 250,
                        y + 5
                    );

                    const media =
                        (
                            Number(
                                aluno.media
                            )
                            || 0
                        )
                        .toFixed(2);

                    doc.text(
                        media,
                        inicioX + 355,
                        y + 5
                    );

                    doc.text(
                        situacao,
                        inicioX + 435,
                        y + 5
                    );

                    y += 20;

                    if(y > 730){

                        doc.addPage();

                        desenharCabecalho(
                            doc,
                            curso,
                            corCurso,
                            totalInscritos
                        );

                        y = 165;

                        doc
                            .fillColor(
                                corCurso
                            )
                            .rect(
                                inicioX,
                                y,
                                515,
                                20
                            )
                            .fill();

                        doc
                            .fillColor(
                                "white"
                            )
                            .fontSize(10)
                            .font(
                                "Helvetica-Bold"
                            );

                        doc.text(
                            "Pos",
                            inicioX + 5,
                            y + 5
                        );

                        doc.text(
                            "Nome do Candidato",
                            inicioX + 35,
                            y + 5
                        );

                        doc.text(
                            "Nascimento",
                            inicioX + 250,
                            y + 5
                        );

                        doc.text(
                            "Média",
                            inicioX + 355,
                            y + 5
                        );

                        doc.text(
                            "Situação",
                            inicioX + 435,
                            y + 5
                        );

                        y += 20;
                    }

                });

                doc.y = y + 10;

            });

        });

        doc.end();

        stream.on(
            "finish",
            ()=>{
                resolve();
            }
        );

        stream.on(
            "error",
            erro=>{
                reject(
                    erro
                );
            }
        );

    });

}

export default {
    GerarPDF
};
