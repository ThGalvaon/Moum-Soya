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
	cep char(9) not null
);

CREATE TABLE fazenda (
	idfazenda int auto_increment,
    fkEndereco int,
    primary key (idFazenda, fkEndereco),
    nome varchar(40) not null,
    cnpj char(14) not null,
    qtd_sensores int,
    hectares float, 
    dtInicio date not null,
    dtCancelamento date,
    fkUsuario int not null,
    constraint fkEnderecoFazenda foreign key (fkEndereco) references endereco (idEndereco),
    constraint fkUsuarioFazenda foreign key (fkUsuario) references usuario (idusuario)
);

CREATE TABLE sensor (
	idSensor int primary key auto_increment,
    localSensor varchar(45),
    statusSensor varchar(45),
    fkFazenda int,
    constraint fkFazendaSensor foreign key (fkFazenda) references fazenda (idfazenda)
);

CREATE TABLE alerta (
idAlerta int auto_increment,
statusAlerta varchar(45),
idFazenda int,
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


INSERT INTO usuario (nome, email, senha, status_usuario, telefone, fkAdmin) VALUES
('Maria Silva', 'maria@gmail.com', 'senha123', 'Ativo', '11987654321', NULL),
('João Santos', 'joao@gmail.com', 'senha123', 'Ativo', '11987654322', NULL),
('Ana Oliveira', 'ana@gmail.com', 'senha123', 'Inativo', '11987654323', 1),
('Carlos Pereira', 'carlos@gmail.com', 'senha123', 'Ativo', '11987654324', NULL),
('Fernanda Lima', 'fernanda@gmail.com', 'senha123', 'Ativo', '11987654325', 1),
('Lucas Costa', 'lucas@gmail.com', 'senha123', 'Inativo', '11987654326', 2),
('Patrícia Almeida', 'patricia@gmail.com', 'senha123', 'Ativo', '11987654327', NULL),
('Ricardo Mendes', 'ricardo@gmail.com', 'senha123', 'Ativo', '11987654328', NULL),
('Juliana Rocha', 'juliana@gmail.com', 'senha123', 'Inativo', '11987654329', 1),
('Marcos Ribeiro', 'marcos@gmail.com', 'senha123', 'Ativo', '11987654330', NULL),
('Camila Martins', 'camila@gmail.com', 'senha123', 'Ativo', '11987654331', 2),
('Rafael Souza', 'rafael@gmail.com', 'senha123', 'Inativo', '11987654332', NULL),
('Tatiane Ferreira', 'tatiane@gmail.com', 'senha123', 'Ativo', '11987654333', NULL),
('Gustavo Lima', 'gustavo@gmail.com', 'senha123', 'Ativo', '11987654334', 1),
('Sofia Cardoso', 'sofia@gmail.com', 'senha123', 'Inativo', '11987654335', 2);

INSERT INTO endereco (cidade, bairro, logradouro, numero, cep) VALUES
('Curitiba', 'Centro', 'Rua XV de Novembro', '400', '80060-000'),
('Porto Alegre', 'Cidade Baixa', 'Rua dos Andradas', '500', '90010-000'),
('Goiânia', 'Setor Oeste', 'Avenida Anhanguera', '600', '74110-000'),
('Campinas', 'Centro', 'Rua do Mercado', '700', '13010-000'),
('Florianópolis', 'Centro', 'Rua Felipe Schmidt', '800', '88010-000'),
('Belo Horizonte', 'Pampulha', 'Rua da Pampulha', '900', '31270-000'),
('São Paulo', 'Mooca', 'Rua do Tatuapé', '1000', '03010-000'),
('Rio de Janeiro', 'Ipanema', 'Rua Visconde de Pirajá', '1100', '22410-000'),
('Curitiba', 'Batel', 'Rua Brigadeiro Faria Lima', '1200', '80430-000'),
('Porto Alegre', 'Moinhos de Vento', 'Rua Ramiro Barcelos', '1300', '90030-000'),
('Goiânia', 'Setor Sul', 'Avenida República do Líbano', '1400', '74010-000'),
('Campinas', 'Barão Geraldo', 'Rua do Café', '1500', '13080-000'),
('Florianópolis', 'Trindade', 'Rua Deputado Antônio Edu Vieira', '1600', '88050-000'),
('Belo Horizonte', 'Savassi', 'Rua da Bahia', '1700', '30160-000'),
('São Paulo', 'Vila Madalena', 'Rua Girassol', '1800', '05010-000');

INSERT INTO fazenda (nome, cnpj, qtd_sensores, hectares, dtInicio, dtCancelamento, fkUsuario, fkEndereco) VALUES
('Fazenda Porto Alegre', '33333333333333', 6, 120, '2020-05-01', NULL, 1, 1),
('Fazenda Goiânia', '44444444444444', 5, 100, '2020-06-01', NULL, 2, 2),
('Fazenda Campinas', '55555555555555', 4, 80, '2020-07-01', NULL, 3, 3),
('Fazenda Florianópolis', '66666666666666', 3, 60, '2020-08-01', NULL, 4, 4),
('Fazenda Belo Horizonte', '77777777777777', 6, 120, '2020-09-01', NULL, 5, 5),
('Fazenda São Paulo', '88888888888888', 5, 100, '2020-10-01', NULL, 6, 6),
('Fazenda Rio de Janeiro', '99999999999999', 4, 80, '2020-11-01', NULL, 7, 7),
('Fazenda Curitiba', '10101010101010', 3, 60, '2020-12-01', NULL, 8, 8),
('Fazenda Porto Alegre', '11111111111111', 6, 120, '2021-01-01', NULL, 9, 9),
('Fazenda Goiânia', '12121212121212', 5, 100, '2021-02-01', NULL, 10, 10),
('Fazenda Campinas', '13131313131313', 4, 80, '2021-03-01', NULL, 11, 11),
('Fazenda Florianópolis', '14141414141414', 3, 60, '2021-04-01', NULL, 12, 12),
('Fazenda Belo Horizonte', '15151515151515', 6, 120, '2021-05-01', NULL, 13, 13),
('Fazenda São Paulo', '16161616161616', 5, 100, '2021-06-01', NULL, 14, 14),
('Fazenda Rio de Janeiro', '17171717171717', 4, 80, '2021-07-01', NULL, 15, 15);

INSERT INTO sensor (localSensor, statusSensor, fkFazenda) VALUES
('Local 1', 'Ativo', 1),
('Local 2', 'Ativo', 1),
('Local 3', 'Ativo', 2),
('Local 4', 'Ativo', 2),
('Local 5', 'Ativo', 3),
('Local 6', 'Ativo', 3),
('Local 7', 'Ativo', 4),
('Local 8', 'Ativo', 4),
('Local 9', 'Ativo', 5),
('Local 10', 'Ativo', 5),
('Local 11', 'Ativo', 6),
('Local 12', 'Ativo', 6),
('Local 13', 'Ativo', 7),
('Local 14', 'Ativo', 7),
('Local 15', 'Ativo', 8);

select * from sensor;

INSERT INTO alerta (statusAlerta, idFazenda, umidadeAlerta, dtAlerta, fkSensor) VALUES
('Umidade elevada', 1, '80%', '2022-01-01 10:00:00', 16),
('Umidade alta', 1, '90%', '2022-01-02 11:00:00', 17),
('Umidade crítica', 2, '95%', '2022-01-03 12:00:00', 18),
('Umidade elevada', 2, '85%', '2022-01-04 13:00:00', 19),
('Umidade alta', 3, '92%', '2022-01-05 14:00:00', 20),
('Umidade crítica', 3, '98%', '2022-01-06 15:00:00', 21),
('Umidade elevada', 4, '82%', '2022-01-07 16:00:00', 22),
('Umidade alta', 4, '91%', '2022-01-08 17:00:00', 23),
('Umidade crítica', 5, '96%', '2022-01-09 18:00:00', 24),
('Umidade elevada', 5, '84%', '2022-01-10 19:00:00', 25),
('Umidade alta', 6, '93%', '2022-01-11 20:00:00', 26),
('Umidade crítica', 6, '99%', '2022-01-12 21:00:00', 27),
('Umidade elevada', 7, '81%', '2022-01-13 22:00:00', 28),
('Umidade alta', 7, '90%', '2022-01-14 23:00:00', 29),
('Umidade crítica', 8, '97%', '2022-01-15 00:00:00', 30);

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
select * from usuario;