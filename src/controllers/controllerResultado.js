import serviceResultado from "../services/serviceResultado.js";
import path from "path";

async function GerarPDF(req, res){

    await serviceResultado.GerarPDF();

    const arquivo = path.resolve(
        "resultado-final.pdf"
    );

    res.download(
        arquivo,
        "resultado-final.pdf"
    );

}

export default { GerarPDF };