var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(razao_social, nome_fantasia, cnpj, repre, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (razao_social, nome_fantasia, cnpj, repre, email, senha) VALUES ('${razao_social}', '${nome_fantasia}', '${cnpj}', '${repre}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    // Estou fazendo isso para retornar o id gerado automaticamente pelo bd
    return database.executar(instrucaoSql).then((resultado) => {
        return resultado.insertId;
    }).catch((erro) => {
        console.error("Erro ao cadastrar o usuario:", erro);
        throw erro;
    });
}

function cadastrarEndereco(fkUsuario, cidade, logradouro, numero, cep, qtdTalhao) {
    var instrucaoSql = `
        INSERT INTO endereco 
            (cidade, logradouro, numero, cep, qtdTalhao, fkUsuario) VALUES
            ('${cidade}', '${logradouro}', '${numero}', ,'${cep}','${qtdTalhao}', '${fkUsuario}')
        ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarEndereco
};