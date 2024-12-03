var dashboardModel = require("../models/dashboardModel");

function obterDadosDashboard(req, res) {
    var idSensor = req.params.idSensor;

    if (idSensor == undefined) {
        res.status(400).send("O ID do sensor está undefined!");
    } else {
        dashboardModel.obterDadosUmidade(idSensor)
            .then(
                function (dadosUmidade) {
                    dashboardModel.obterAlertas(idSensor)
                        .then(
                            function (alertas) {
                                res.status(200).json({
                                    umidade: dadosUmidade,
                                    alertas: alertas
                                });
                            }
                        ).catch(
                            function (erro) {
                                console.log("\nErro ao obter alertas:", erro.sqlMessage);
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            ).catch(
                function (erro) {
                    console.log("\nErro ao obter dados de umidade:", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    obterDadosDashboard
};
