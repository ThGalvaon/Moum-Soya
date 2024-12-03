var database = require("../database/config");

function inserirDadosSensor(idSensor, umidade) {
    var instrucaoSql = `
        INSERT INTO dadosSensor (fkSensor, umidade)
        VALUES (${idSensor}, ${umidade});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirAlerta(idSensor, statusAlerta, umidade) {
    var instrucaoSql = `
        INSERT INTO alerta (fkSensor, statusAlerta, umidadeAlerta)
        VALUES (${idSensor}, '${statusAlerta}', '${umidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosUmidade(idSensor) {
    var instrucaoSql = `
        SELECT umidade, dtCaptura
        FROM dadosSensor
        WHERE fkSensor = ${idSensor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterAlertas(idSensor) {
    var instrucaoSql = `
        SELECT statusAlerta, umidadeAlerta, dtAlerta
        FROM alerta
        WHERE fkSensor = ${idSensor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirDadosSensor,
    inserirAlerta,
    obterDadosUmidade,
    obterAlertas
};
