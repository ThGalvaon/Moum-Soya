var dashboardModel = require("../models/dashboardModel");

function inserirDadosSensor(req, res) {
    var idSensor = req.body.idSensorServer;
    var umidade = req.body.umidadeServer;

    if (idSensor == undefined) {
        res.status(400).send("O ID do sensor está undefined!");
    } else if (umidade == undefined) {
        res.status(400).send("A umidade está undefined!");
    } else {
        dashboardModel.inserirDadosSensor(idSensor, umidade)
            .then(
                function (resultado) {
                    res.status(201).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("\nHouve um erro ao inserir os dados do sensor! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function inserirAlerta(req, res) {
    var idSensor = req.body.idSensorServer;
    var statusAlerta = req.body.statusAlertaServer;
    var umidade = req.body.umidadeServer;

    if (idSensor == undefined) {
        res.status(400).send("O ID do sensor está undefined!");
    } else if (statusAlerta == undefined) {
        res.status(400).send("O status do alerta está undefined!");
    } else if (umidade == undefined) {
        res.status(400).send("A umidade está undefined!");
    } else {
        dashboardModel.inserirAlerta(idSensor, statusAlerta, umidade)
            .then(
                function (resultado) {
                    res.status(201).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("\nHouve um erro ao inserir o alerta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

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
    inserirDadosSensor,
    inserirAlerta,
    obterDadosDashboard
};
