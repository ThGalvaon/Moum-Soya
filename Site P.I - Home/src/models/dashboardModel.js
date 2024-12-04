var database = require("../database/config");

function obterDadosUmidade(idSensor) {
    var instrucaoSql = `
        SELECT umidade, DATE_FORMAT(dtCaptura, '%H:%i:%s') AS dtCaptura
        FROM DadosSensor
        WHERE fkSensor = ${idSensor}
        ORDER BY dtCaptura ASC
        LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterAlertas(idSensor) {
    var instrucaoSql = `
        SELECT statusAlerta, DATE_FORMAT(dtAlerta, '%H:%i:%s') AS dtAlerta
        FROM Alerta
        WHERE fkSensor = ${idSensor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUmidade,
    obterAlertas
};
