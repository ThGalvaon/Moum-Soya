var database = require("../database/config")

function obterDadosUmidade(idSensor) {
    var instrucaoSql = `
        SELECT umidade, dtCaptura
        FROM dadosSensor
        WHERE fkSensor = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterAlertas(idSensor) {
    var instrucaoSql = `
        SELECT statusAlerta, umidadeAlerta, dtAlerta
        FROM alerta
        WHERE fkSensor = ?;
    `;    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUmidade,
    obterAlertas,
};