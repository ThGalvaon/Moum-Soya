var database = require("../database/config");

function obterDadosUmidade(idSensor) {
    var instrucaoSql = `
        SELECT umidade, DATE_FORMAT(dtCaptura, '%H:%i:%s') AS dtCaptura
FROM (
    SELECT umidade, dtCaptura
    FROM DadosSensor
    WHERE fkSensor = 1
    ORDER BY dtCaptura DESC
    LIMIT 8
) AS ultimos_registros
ORDER BY dtCaptura ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterAlertas(idSensor) {
    var instrucaoSql = `
        SELECT statusAlerta, DATE_FORMAT(dtAlerta, '%H:%i:%s') AS dtAlerta
        FROM Alerta
        WHERE fkSensor = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUmidade,
    obterAlertas
};
