var dashboardModel = require("../models/dashboardModel");

async function obterDadosDashboard(req, res) {
    const { idSensor } = req.params; // Pegando o ID do sensor pela URL.

    try {
        // Obtém os dados de sensores e alertas do modelo.
        const dadosUmidade = await dashboardModel.obterDadosUmidade(idSensor);
        const alertas = await dashboardModel.obterAlertas(idSensor);

        // Monta a resposta com os dados necessários.
        res.status(200).json({
            umidade: dadosUmidade,
            alertas: alertas,
        });
    } catch (erro) {
        console.error("Erro ao obter dados da dashboard:", erro);
        res.status(500).send(erro.message);
    }
}

module.exports = {
    obterDadosDashboard,
    registrarAlerta,
};
