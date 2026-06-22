import serviceResultado from "../services/serviceResultado.js";

async function GerarPDF(req, res) {
    try {
        const pdf =
            await serviceResultado.GerarPDF();

        res.setHeader(
            "Content-Type",
            "application/pdf"
        );

        res.setHeader(
            "Content-Disposition",
            'attachment; filename="resultado-final.pdf"'
        );

        res.send(pdf);

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