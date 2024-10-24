CREATE DATABASE sojaprotegida;
USE sojaprotegida;

-- CRIAÇÃO DAS TABELAS
CREATE TABLE Usuario (
	idUsuario int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(70) not null,
    senha varchar(30) not null,
    status_usuario varchar(10),
    telefone varchar(11),
    fkAdmin int,
    constraint fkAdminUsu foreign key (fkAdmin) references usuario (idUsuario),
    constraint chk_status CHECK (status_usuario IN ('Ativo', 'Inativo'))
);

CREATE TABLE Endereco (
	idEndereco int primary key auto_increment,
	cidade varchar(45) not null,
	bairro varchar(45) not null,
	logradouro varchar(45) not null,
	numero varchar(5) not null,
	cep char(9) not null
);

CREATE TABLE Fazenda (
	idfazenda int primary key auto_increment,
    nome varchar(40) not null,
    cnpj varchar(20) not null,
    qtd_sensores int,
    hectares int, 
    dtInicio date not null,
    dtCancelamento date,
    fkUsuario int not null,
    fkEndereco int not null,
    constraint fkEnderecoFazenda foreign key (fkEndereco) references Endereco (idEndereco),
    constraint fkUsuarioFazenda foreign key (fkUsuario) references Usuario (idusuario)
);

CREATE TABLE Sensor (
	idSensor int primary key auto_increment,
    localSensor varchar(45),
    statusSensor varchar(45),
    fkFazenda int,
    constraint fkFazendaSensor foreign key (fkFazenda) references fazenda (idfazenda)
);

CREATE TABLE Alerta (
idAlerta int primary key auto_increment,
statusAlerta varchar(45),
idFazenda int,
umidadeAlerta varchar(45),
dtAlerta datetime,
fkSensor int,
constraint fkSensorAlerta foreign key (fkSensor) references Sensor (idSensor),
constraint chkStatus check (statusAlerta in('Umidade elevada', 'Umidade alta', 'Umidade crítica'))
);

CREATE TABLE DadosSensor (
idDadosSensor int auto_increment,
fkSensor int,
constraint pkDadosSensor primary key (idDadosSensor, fkSensor),
umidade float,
dtCaptura datetime
);

-- INSERÇÃO DE DADOS FICTÍCIOS PARA TESTE
INSERT INTO Usuario (nome, email, senha, status_usuario, telefone, fkAdmin) VALUES
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
('Sofia Cardoso', 'sofia@gmail.com', 'senha123', 'Inativo', '11987654335', 2),
('Diego Nascimento', 'diego@gmail.com', 'senha123', 'Ativo', '11987654336', NULL),
('Bruna Dias', 'bruna@gmail.com', 'senha123', 'Ativo', '11987654337', NULL),
('Felipe Almeida', 'felipe@gmail.com', 'senha123', 'Inativo', '11987654338', 1),
('Mariana Costa', 'mariana@gmail.com', 'senha123', 'Ativo', '11987654339', NULL),
('André Santos', 'andre@gmail.com', 'senha123', 'Ativo', '11987654340', NULL),
('Larissa Gomes', 'larissa@gmail.com', 'senha123', 'Inativo', '11987654341', 2),
('Vinícius Lima', 'vinicius@gmail.com', 'senha123', 'Ativo', '11987654342', NULL),
('Jéssica Martins', 'jessica@gmail.com', 'senha123', 'Ativo', '11987654343', NULL),
('Leonardo Rocha', 'leonardo@gmail.com', 'senha123', 'Inativo', '11987654344', 1),
('Aline Ferreira', 'aline@gmail.com', 'senha123', 'Ativo', '11987654345', NULL),
('Tiago Nascimento', 'tiago@gmail.com', 'senha123', 'Ativo', '11987654346', NULL),
('Nathalia Cardoso', 'nathalia@gmail.com', 'senha123', 'Inativo', '11987654347', 2),
('Roberto Souza', 'roberto@gmail.com', 'senha123', 'Ativo', '11987654348', NULL),
('Tatiane Lima', 'tatiane_lima@gmail.com', 'senha123', 'Ativo', '11987654349', NULL),
('Samuel Almeida', 'samuel@gmail.com', 'senha123', 'Inativo', '11987654350', 1);

INSERT INTO Endereco (cidade, bairro, logradouro, numero, cep) VALUES
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
('São Paulo', 'Vila Madalena', 'Rua Girassol', '1800', '05010-000'),
('Rio de Janeiro', 'Leblon', 'Rua Ataulfo de Paiva', '1900', '22440-000'),
('Curitiba', 'Centro', 'Rua XV de Novembro', '2000', '80060-000'),
('Porto Alegre', 'Cidade Baixa', 'Rua dos Andradas', '2100', '90010-000'),
('Goiânia', 'Setor Oeste', 'Avenida Anhanguera', '2200', '74110-000'),
('Campinas', 'Centro', 'Rua do Mercado', '2300', '13010-000'),
('Florianópolis', 'Centro', 'Rua Felipe Schmidt', '2400', '88010-000'),
('Belo Horizonte', 'Pampulha', 'Rua da Pampulha', '2500', '31270-000'),
('São Paulo', 'Mooca', 'Rua do Tatuapé', '2600', '03010-000'),
('Rio de Janeiro', 'Ipanema', 'Rua Visconde de Pirajá', '2700', '22410-000'),
('Curitiba', 'Batel', 'Rua Brigadeiro Faria Lima', '2800', '80430-000'),
('Porto Alegre', 'Moinhos de Vento', 'Rua Ramiro Barcelos', '2900', '90030-000'),
('Goiânia', 'Setor Sul', 'Avenida República do Líbano', '3000', '74010-000');

INSERT INTO Fazenda (nome, cnpj, qtd_sensores, hectares, dtInicio, dtCancelamento, fkUsuario, fkEndereco) VALUES
('Fazenda Porto Alegre', '33333333333333', 6, 120, '2020-05-01', NULL, 5, 5),
('Fazenda Goiânia', '44444444444444', 5, 100, '2020-06-01', NULL, 6, 6),
('Fazenda Campinas', '55555555555555', 4, 80, '2020-07-01', NULL, 7, 7),
('Fazenda Florianópolis', '66666666666666', 3, 60, '2020-08-01', NULL, 8, 8),
('Fazenda Belo Horizonte', '77777777777777', 6, 120, '2020-09-01', NULL, 9, 9),
('Fazenda São Paulo', '88888888888888', 5, 100, '2020-10-01', NULL, 10, 10),
('Fazenda Rio de Janeiro', '99999999999999', 4, 80, '2020-11-01', NULL, 11, 11),
('Fazenda Curitiba', '10101010101010', 3, 60, '2020-12-01', NULL, 12, 12),
('Fazenda Porto Alegre', '11111111111111', 6, 120, '2021-01-01', NULL, 13, 13),
('Fazenda Goiânia', '12121212121212', 5, 100, '2021-02-01', NULL, 14, 14),
('Fazenda Campinas', '13131313131313', 4, 80, '2021-03-01', NULL, 15, 15),
('Fazenda Florianópolis', '14141414141414', 3, 60, '2021-04-01', NULL, 16, 16),
('Fazenda Belo Horizonte', '15151515151515', 6, 120, '2021-05-01', NULL, 17, 17),
('Fazenda São Paulo', '16161616161616', 5, 100, '2021-06-01', NULL, 18, 18),
('Fazenda Rio de Janeiro', '17171717171717', 4, 80, '2021-07-01', NULL, 19, 19),
('Fazenda Curitiba', '18181818181818', 3, 60, '2021-08-01', NULL, 20, 20),
('Fazenda Porto Alegre', '19191919191919', 6, 120, '2021-09-01', NULL, 21, 21),
('Fazenda Goiânia', '20202020202020', 5, 100, '2021-10-01', NULL, 22, 22),
('Fazenda Campinas', '21212121212121', 4, 80, '2021-11-01', NULL, 23, 23),
('Fazenda Florianópolis', '22222222222222', 3, 60, '2021-12-01', NULL, 24, 24),
('Fazenda Belo Horizonte', '23232323232323', 6, 120, '2022-01-01', NULL, 25, 25),
('Fazenda São Paulo', '24242424242424', 5, 100, '2022-02-01', NULL, 26, 26),
('Fazenda Rio de Janeiro', '25252525252525', 4, 80, '2022-03-01', NULL, 27, 27),
('Fazenda Curitiba', '26262626262626', 3, 60, '2022-04-01', NULL, 28, 28),
('Fazenda Porto Alegre', '27272727272727', 6, 120, '2022-05-01', NULL, 29, 29),
('Fazenda Goiânia', '28282828282828', 5, 100, '2022-06-01', NULL, 30, 4);

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
('Local 15', 'Ativo', 8),
('Local 16', 'Ativo', 8),
('Local 17', 'Ativo', 9),
('Local 18', 'Ativo', 9),
('Local 19', 'Ativo', 10),
('Local 20', 'Ativo', 10),
('Local 21', 'Ativo', 11),
('Local 22', 'Ativo', 11),
('Local 23', 'Ativo', 12),
('Local 24', 'Ativo', 12),
('Local 25', 'Ativo', 13),
('Local 26', 'Ativo', 13),
('Local 27', 'Ativo', 14),
('Local 28', 'Ativo', 14),
('Local 29', 'Ativo', 15),
('Local 30', 'Ativo', 15);

INSERT INTO alerta (statusAlerta, idFazenda, umidadeAlerta, dtAlerta, fkSensor) VALUES
('Umidade elevada', 1, '80%', '2022-01-01 10:00:00', 1),
('Umidade alta', 1, '90%', '2022-01-02 11:00:00', 2),
('Umidade crítica', 2, '95%', '2022-01-03 12:00:00', 3),
('Umidade elevada', 2, '85%', '2022-01-04 13:00:00', 4),
('Umidade alta', 3, '92%', '2022-01-05 14:00:00', 5),
('Umidade crítica', 3, '98%', '2022-01-06 15:00:00', 6),
('Umidade elevada', 4, '82%', '2022-01-07 16:00:00', 7),
('Umidade alta', 4, '91%', '2022-01-08 17:00:00', 8),
('Umidade crítica', 5, '96%', '2022-01-09 18:00:00', 9),
('Umidade elevada', 5, '84%', '2022-01-10 19:00:00', 10),
('Umidade alta', 6, '93%', '2022-01-11 20:00:00', 11),
('Umidade crítica', 6, '99%', '2022-01-12 21:00:00', 12),
('Umidade elevada', 7, '81%', '2022-01-13 22:00:00', 13),
('Umidade alta', 7, '90%', '2022-01-14 23:00:00', 14),
('Umidade crítica', 8, '97%', '2022-01-15 00:00:00', 15),
('Umidade elevada', 8, '83%', '2022-01-16 01:00:00', 16),
('Umidade alta', 9, '94%', '2022-01-17 02:00:00', 17),
('Umidade crítica', 9, '100%', '2022-01-18 03:00:00', 18),
('Umidade elevada', 10, '80%', '2022-01-19 04:00:00', 19),
('Umidade alta', 10, '92%', '2022-01-20 05:00:00', 20),
('Umidade crítica', 11, '95%', '2022-01-21 06:00:00', 21),
('Umidade elevada', 11, '85%', '2022-01-22 07:00:00', 22),
('Umidade alta', 12, '91%', '2022-01-23 08:00:00', 23),
('Umidade crítica', 12, '98%', '2022-01-24 09:00:00', 24),
('Umidade elevada', 13, '82%', '2022-01-25 10:00:00', 25),
('Umidade alta', 13, '93%', '2022-01-26 11:00:00', 26),
('Umidade crítica', 14, '96%', '2022-01-27 12:00:00', 27),
('Umidade elevada', 14, '84%', '2022-01-28 13:00:00', 28),
('Umidade alta', 15, '94%', '2022-01-29 14:00:00', 29),
('Umidade crítica', 15, '99%', '2022-01-30 15:00:00', 30);

INSERT INTO DadosSensor (fkSensor, umidade, dtCaptura) VALUES
(1, 50.5, '2022-01-01 10:00:00'),
(1, 51.2, '2022-01-01 11:00:00'),
(1, 52.1, '2022-01-01 12:00:00'),
(2, 55.3, '2022-01-02 10:00:00'),
(2, 56.1, '2022-01-02 11:00:00'),
(2, 57.2, '2022-01-02 12:00:00'),
(3, 60.5, '2022-01-03 10:00:00'),
(3, 61.3, '2022-01-03 11:00:00'),
(3, 62.2, '2022-01-03 12:00:00'),
(4, 65.1, '2022-01-04 10:00:00'),
(4, 66.2, '2022-01-04 11:00:00'),
(4, 67.3, '2022-01-04 12:00:00'),
(5, 50.8, '2022-01-05 10:00:00'),
(5, 51.5, '2022-01-05 11:00:00'),
(5, 52.4, '2022-01-05 12:00:00'),
(6, 55.9, '2022-01-06 10:00:00'),
(6, 56.7, '2022-01-06 11:00:00'),
(6, 57.6, '2022-01-06 12:00:00'),
(7, 60.1, '2022-01-07 10:00:00'),
(7, 61.0, '2022-01-07 11:00:00'),
(7, 62.1, '2022-01-07 12:00:00'),
(8, 65.6, '2022-01-08 10:00:00'),
(8, 66.5, '2022-01-08 11:00:00'),
(8, 67.4, '2022-01-08 12:00:00'),
(9, 51.9, '2022-01-09 10:00:00'),
(9, 52.8, '2022-01-09 11:00:00'),
(9, 53.7, '2022-01-09 12:00:00'),
(10, 56.4, '2022-01-10 10:00:00'),
(10, 57.3, '2022-01-10 11:00:00'),
(10, 58.2, '2022-01-10 12:00:00'),
(11, 61.8, '2022-01-11 10:00:00'),
(11, 62.7, '2022-01-11 11:00:00'),
(11, 63.6, '2022-01-11 12:00:00'),
(12, 66.1, '2022-01-12 10:00:00'),
(12, 67.0, '2022-01-12 11:00:00'),
(12, 68.1, '2022-01-12 12:00:00'),
(13, 52.5, '2022-01-13 10:00:00'),
(13, 53.4, '2022-01-13 11:00:00'),
(13, 54.3, '2022-01-13 12:00:00'),
(14, 56.9, '2022-01-14 10:00:00'),
(14, 57.8, '2022-01-14 11:00:00'),
(14, 58.7, '2022-01-14 12:00:00'),
(15, 62.2, '2022-01-15 10:00:00'),
(15, 63.1, '2022-01-15 11:00:00');

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
