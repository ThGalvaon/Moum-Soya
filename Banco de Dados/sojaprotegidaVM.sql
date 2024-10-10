CREATE DATABASE sojaprotegidaVM;
USE sojaprotegidaVM;

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
(default, 'Pedro Almeida', 'pedro.almeida@email.com', 'pedro!senha2024', 'Ativo', '1118273645'),
(default, 'Jucelino Aparecida', 'jucelino.aparecida@email.com', 'Jucilino258$', 'Inativo', '11958746328');

SELECT * FROM usuario;

SELECT * FROM usuario ORDER BY nome;

SELECT nome FROM usuario
WHERE nome LIKE '%Maria%';

create table Endereco (
	idEndereco int primary key auto_increment,
	cidade varchar(45),
	bairro varchar(45),
	logradouro varchar(45),
	numero varchar(5),
	cep char(9)
);

insert into Endereco values
	(default, 'Ribeirão Preto', 'Vila José', 'Rua Capitão Silva', '12345', '12345-678'),
    (default, 'Campinas', 'Vila Marcia', 'Rua Coronel Souza', '54321', '87654-321'),
    (default, 'Mairiporã', 'Vila Claudia', 'Rua Tenente Ferreira', '67890', '24680-135'),
    (default, 'São José', 'Vila Augusta', 'Rua Cabo Gomes', '19876', '13579-246');

CREATE TABLE fazenda (
	idfazenda int auto_increment,
    fkEndereco int,
    constraint pkEndFaz primary key (idFazenda, fkEndereco),
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
(default, 1, 'Fazenda Bela Vista', '12.345.678/0001-99', 5, 1500, '2020-10-21', null, 1),
(default, 2, 'AgroSantos', '98.765.432/0001-11', 8, 3000, '2017-02-11', '2024-09-30', 2),
(default, 3, 'Fazenda Esperança', '11.223.344/0001-55', 10, 2500, '2022-11-10', null, 3),
(default, 4, 'Fazenda Super Soja', '97.438.167/0001-70', 5, 1200, '2019-04-15', null, 4);

SELECT * FROM fazenda;

SELECT f.idfazenda, f.nome as 'Nome da Fazenda', u.nome as 'Nome do usuário', f.cnpj, f.dtCancelamento, status_usuario
FROM usuario as u JOIN fazenda as f
ON idusuario = fkUsuario
WHERE status_usuario = 'Inativo';

SELECT * FROM fazenda
WHERE hectares > 10;

SELECT * FROM fazenda JOIN usuario
WHERE qtd_sensores > 5 and status_usuario = 'Ativo';


CREATE TABLE sensor (
	idsensor int primary key auto_increment,
    umidade float,
    dtCaptura datetime default current_timestamp,
    fkFazenda int,
    constraint fkFazendaSensor foreign key (fkFazenda) references fazenda (idfazenda)
);

SELECT * FROM sensor;
SELECT avg(umidade)FROM sensor;
SELECT min(umidade)FROM sensor;
SELECT max(umidade)FROM sensor;


SELECT * FROM sensor
WHERE avisos = 'Umidade baixa';

SELECT * FROM sensor
WHERE umidade > 40;


SELECT f.nome as 'Nome fazenda',
ifnull(umidade, 'Verificar sensor') as 'Status do sensor'
FROM fazenda as f JOIN sensor
ON fkFazenda = idFazenda;

SELECT f.nome as 'Nome da fazenda', idSensor, CASE 
  WHEN umidade > 50 THEN 'Verificar local, umidade elevada!'
  ELSE 'Umidade dentro da normalidade'
  END as Umidade
  FROM fazenda as f JOIN sensor
  ON fkFazenda = idFazenda
  ORDER BY umidade;