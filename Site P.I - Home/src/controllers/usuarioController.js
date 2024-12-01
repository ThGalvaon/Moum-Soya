var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var razao_social = req.body.razao_socialServer;
    var nome_fantasia = req.body.nome_fantasiaServer;
    var cnpj = req.body.cnpjServer;
    var repre = req.body.repreServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (razao_social == undefined) {
        res.status(400).send("Sua razão social está undefined!")
    } else if (nome_fantasia == undefined) {
        res.status(400).send("Seu nome fantasia está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (repre == undefined) {
        res.status(400).send("Seu repre está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(razao_social, nome_fantasia, cnpj, repre, email, senha).then(
            function (resultado) {
                res.json({
                    idUsuario: resultado
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrarEndereco(req, res) {
    var fkUsuario = req.params.idUsuario;
    var cidade = req.body.cidadeServer;
    var logradouro = req.body.logradouroServer;
    var numero = req.body.numeroServer;
    var qtdTalhao = req.body.qtdTalhaoServer;
    var cep = req.body.cepServer;

    if (cidade == undefined) {
        res.status(400).send("Sua razão social está undefined!")
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu repre está undefined!");
    } else {

        usuarioModel.cadastrar(fkUsuario, cidade, logradouro, numero, cep, qtdTalhao).then(
            function (resultado) {
                res.status(201).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: " + erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarEndereco
}