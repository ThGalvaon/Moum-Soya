CREATE DATABASE sojaprotegida;
USE sojaprotegida;

CREATE TABLE usuario (
	idusuario int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(70) not null,
    senha varchar(30) not null,
    status_usuario varchar(10),
    telefone varchar(11),
    constraint chk_status CHECK (status_usuario IN ('Ativo', 'Inativo'))
);

INSERT INTO usuario VALUES
(default, 'João Silva', 'joao.silva@email.com', '1234senhaJoao', 'Ativo', '11912345678'),
(default, 'Maria Rosa', 'maria.rosa@email.com', 'maria@5678', 'Ativo', '11987654321'),
(default, 'Pedro Almeida', 'pedro.almeida@email.com', 'pedro!senha2024', 'Ativo', '1118273645');

SELECT * FROM usuario;

SELECT * FROM usuario ORDER BY nome;

SELECT nome FROM usuario
WHERE nome LIKE '%Maria%';

CREATE TABLE fazenda (
	idfazenda int primary key auto_increment,
    nome varchar(40),
    cnpj varchar(20),
    qtd_sensores int,
    hectares int, 
    dtInicio date,
    dtCancelamento date,
    fkUsuario int,
    constraint fkUsuarioFazenda foreign key (fkUsuario) references usuario (idusuario)
);

INSERT INTO fazenda VALUES 
(default, 'Fazenda Bela Vista', '12.345.678/0001-99', 5, 1500, '2020-10-21', null, 1),
(default, 'AgroSantos', '98.765.432/0001-11', 8, 3000, '2017-02-11', '2024-09-30', 2),
(default, 'Fazenda Esperança', '11.223.344/0001-55', 10, 2500, '2022-11-10', null, 3),
(default, 'Fazenda Super Soja', '97.438.167/0001-70', 5, 1200, '2019-04-15', null, 1);

SELECT * FROM fazenda;

SELECT idfazenda, nome, cnpj, dtCancelamento FROM fazenda
WHERE status_cliente = 'Inativo';

SELECT * FROM fazenda
WHERE hectares > 10;

SELECT * FROM fazenda
WHERE qtd_sensores > 5 and status_cliente = 'Ativo';

CREATE TABLE sensor (
	idsensor int primary key auto_increment,
    umidade float,
    avisos varchar(40),
    dtAviso date,
    horario time,
    fkFazenda int,
    constraint chk_avisos CHECK (avisos IN ('Umidade padrão', 'Umidade elevada', 'Umidade critica')),
    constraint fkFazendaSensor foreign key (fkFazenda) references fazenda (idfazenda)
);

INSERT INTO sensor VALUES
(default, 55.3, 'Umidade elevada', '2020-10-22', '10:00:00', 1),
(default, 54.1, 'Umidade elevada', '2020-10-22', '11:00:00', 1),
(default, 48.7, 'Umidade padrão', '2017-02-12', '09:30:00', 2),
(default, 51.1, 'Umidade elevada', '2017-02-12', '10:30:00', 2),
(default, 72.9, 'Umidade critica', '2022-11-11', '10:00:00', 3),
(default, 65.5, 'Umidade elevada', '2022-11-11', '11:00:00', 3),
(default, 50.3, 'Umidade elevada', '2018-04-16', '09:30:00', 4),
(default, 44.9, 'Umidade padrão', '2018-04-16', '10:30:00', 4);

SELECT * FROM sensor;

SELECT * FROM sensor
WHERE avisos = 'Umidade baixa';

SELECT * FROM sensor
WHERE umidade > 40 and temperatura > 20;