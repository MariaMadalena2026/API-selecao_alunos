import serviceResultado from "../services/serviceResultado.js";

async function GerarPDF(req, res) {
    try {
        res.setHeader(
            "Content-Type",
            "application/pdf"
        );

        res.setHeader(
            "Content-Disposition",
            'attachment; filename="resultado-final.pdf"'
        );

        await serviceResultado.GerarPDF(res);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao gerar PDF"
        });
    }
}

export default {
    GerarPDF
};