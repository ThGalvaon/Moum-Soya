CREATE DATABASE sojaprotegidaVM;

USE sojaprotegidaVM;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
    razao_social varchar(50) not null,
    nome_fantasia varchar(45) not null,
    cnpj char(14) not null,
    repre varchar(45),
    email varchar(70) not null,
    senha varchar(30) not null
);

CREATE TABLE endereco (
	idEndereco int primary key auto_increment,
	cidade varchar(45) not null,
	logradouro varchar(45) not null,
	numero varchar(5) not null,
	cep char(9) not null,
    qtdTalhao int,
    fkUsuario int,
    constraint fkEnderecoUsuario foreign key (fkUsuario) references usuario(idUsuario)
);

CREATE TABLE sensor (
	idSensor int primary key auto_increment,
    localSensor varchar(45),
    statusSensor varchar(45),
    fkEndereco int,
    constraint fkEnderecoSensor foreign key (fkEndereco) references endereco(idEndereco)
);

CREATE TABLE alerta (
idAlerta int auto_increment,
statusAlerta varchar(45),
umidadeAlerta varchar(5),
dtAlerta datetime,
fkSensor int,
primary key (idAlerta, fkSensor),
constraint fkSensorAlerta foreign key (fkSensor) references sensor (idSensor),
constraint chkStatus check (statusAlerta in('Umidade elevada', 'Umidade alta', 'Umidade crítica'))
);

CREATE TABLE dadosSensor (
idDadosSensor int auto_increment,
fkSensor int,
primary key (idDadosSensor, fkSensor),
umidade float,
dtCaptura datetime default current_timestamp()
);

describe usuario;
describe dadosSensor;
select * From endereco;

INSERT INTO usuario (razao_social, nome_fantasia, cnpj, repre, email, senha) VALUES
('Xpto','Xpto corporation', '12365478965478', 'Maria', 'maria@gmail.com', '#Senha123');

INSERT INTO endereco (cidade, logradouro, numero, cep, qtdTalhao, fkUsuario) VALUES
('Curitiba', 'Rua XV de Novembro', '400', '80060-000', 5, 1);

INSERT INTO dadosSensor (fkSensor, umidade, dtCaptura) VALUES 
(1, 20.0, '2022-01-01 10:00:00'),
(1, 32.0, '2022-01-01 10:00:00'),
(1, 32.0, '2022-01-01 10:00:00'),
(1, 13.0, '2022-01-01 10:00:00'),
(1, 44.0, '2022-01-01 10:00:00'),
(1, 12.0, '2022-01-01 10:00:00'),
(1, 32.0, '2022-01-01 10:00:00'),
(1, 34.0, '2022-01-01 10:00:00'),
(1, 54.0, '2022-01-01 10:00:00'),
(1, 12.0, '2022-01-01 10:00:00'),
(1, 45.0, '2022-01-01 10:00:00'),
(1, 65.0, '2022-01-01 10:00:00'),
(1, 43.0, '2022-01-01 10:00:00'),
(1, 11.0, '2022-01-01 10:00:00');

select * from usuario;
select * from endereco;
select * from dadosSensor;

INSERT INTO sensor (localSensor, statusSensor, fkEndereco) VALUES
('Talhão 1', 'Ativo', 1),
('Talhão 2', 'Inativo', 1),
('Talhão 3', 'Inativo', 1),
('Talhão 4', 'Inativo', 1),
('Talhão 5', 'Ativo', 1);

INSERT INTO alerta (statusAlerta, umidadeAlerta, dtAlerta, fkSensor) VALUES
('Umidade elevada', '80%', '2022-01-01 10:00:00', 1);

SELECT * FROM usuario;

SELECT * FROM usuario ORDER BY nome;

SELECT nome FROM usuario
WHERE nome LIKE '%Maria%';

SELECT * FROM fazenda;

SELECT f.idfazenda, f.nome as 'Nome da Fazenda', u.nome as 'Nome do usuário', f.cnpj, f.dtCancelamento, status_usuario
FROM usuario as u JOIN fazenda as f
ON idusuario = fkUsuario
WHERE status_usuario = 'Inativo';

SELECT * FROM fazenda
WHERE hectares > 10;

SELECT * FROM fazenda JOIN usuario
WHERE qtd_sensores > 5 and status_usuario = 'Ativo';

SELECT * FROM sensor;

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
  
  SELECT * FROM sensor;
SELECT avg(umidade)FROM sensor;
SELECT min(umidade)FROM sensor;
SELECT max(umidade)FROM sensor;

select s.idSensor as 'ID', s.localSensor as 'Local do sensor', d.umidade, d.dtCaptura as 'Data e hora'
	from sensor as s join dadosSensor as d on d.fkSensor = s.idSensor;
    
select f.nome as 'Nome da fazenda', s.idSensor as 'ID sensor', s.statusSensor as 'Status' from fazenda as f join sensor as s on s.fkFazenda = f.idFazenda;