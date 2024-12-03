CREATE DATABASE sojaprotegida;
USE sojaprotegida;

-- CRIAÇÃO DAS TABELAS
CREATE TABLE Usuario (
	idUsuario int primary key auto_increment,
	razaoSocial varchar(45),
	nomeFantasia varchar(50),
	cnpj char(14),
	representante varchar(45),
	email varchar(70),
	senha varchar(30)
);

CREATE TABLE Endereco (
	idEndereco int primary key auto_increment,
	cidade varchar(45) not null,
	bairro varchar(45) not null,
	logradouro varchar(45) not null,
	numero varchar(5) not null,
	cep char(8) not null,
	qtdTalhoes int,
	fkUsuario int,
    foreign key (fkUsuario) references Usuario (idUsuario)
);

CREATE TABLE Sensor (
	idSensor int primary key auto_increment,
    local_talhao varchar(45),
    statusSensor varchar(45),
    fkEndereco int,
    foreign key (fkEndereco) references Endereco (idEndereco)
);

CREATE TABLE DadosSensor (
	idDadosSensor int auto_increment,
	fkSensor int,
	primary key (idDadosSensor, fkSensor),
    foreign key (fkSensor) references Sensor (idSensor),
	umidade float,
	dtCaptura datetime
);

CREATE TABLE Alerta (
idAlerta int auto_increment,
fkSensor int,
fkDadosSensores int,
primary key (idAlerta, fkSensor, fkDadosSensor),
foreign key (fkSensor) references Sensor (idSensor),
foreign key (fkDadosSensores) references DadosSensor (idDadosSensor),
statusAlerta varchar(45),
tempo_alerta varchar(45),
dtAlerta datetime,
check (statusAlerta in('Umidade elevada', 'Umidade alta', 'Umidade crítica'))
);

-- SELECIONAR TODOS OS DADOS DA TABELA USUARIO
SELECT * FROM usuario;

-- SELECIONAR TODOS OS DADOS DA TABELA USUARIO ORDENADOS POR NOME
SELECT * FROM usuario ORDER BY nome;

-- SELECIONAR OS USUÁRIOS QUE POSSUAM 'MARIA' NO NOME
SELECT nome FROM usuario
WHERE nome LIKE '%Maria%';

-- SELECIONAR TODOS OS DADOS DA TABELA FAZENDA
SELECT * FROM fazenda;

-- SELECIONAR O IDENTIFICADOR, NOME E CNPJ DA FAZENDA, NOME DO USUARIO E DATA DE CANCELAMENTO DE USUARIOS INATIVOS
SELECT f.idfazenda, f.nome as 'Nome da Fazenda', u.nome as 'Nome do usuário', f.cnpj, f.dtCancelamento, status_usuario
FROM usuario as u JOIN fazenda as f
ON idusuario = fkUsuario
WHERE status_usuario = 'Inativo';

-- SELECIONAR OS DADOS DAS FAZENDAS QUE POSSUEM MAIS DE 10 HECTARES
SELECT * FROM fazenda
WHERE hectares > 10;

-- SELECIONAR OS DADOS DOS USUARIOS ATIVOS E DAS FAZENDAS QUE POSSUEM MAIS DE 5 SENSORES
SELECT * FROM fazenda JOIN usuario
WHERE qtd_sensores > 5 and status_usuario = 'Ativo';

-- SELECIONAR OS DADOS DOS SENSORES
SELECT * FROM sensor;

-- SELECIONAR OS DADOS DOS SENSORES QUE ESTÃO MONITORANDO UMIDADES ACIMA DE 40
SELECT * FROM dadosSensor
WHERE umidade > 40;

INSERT INTO sensor (localSensor, statusSensor, fkFazenda) VALUES
('Local 31', null, 16);

UPDATE sensor SET statusSensor = null
  WHERE idSensor = 17;

-- SELECIONAR O NOME DAS FAZENDAS E VERIFICAR OS SENSORES EM FUNCIONAMENTO
SELECT f.nome as 'Nome fazenda',
ifnull(statusSensor, 'Verificar sensor') as 'Status do sensor'
FROM fazenda as f JOIN sensor
ON fkFazenda = idFazenda;


-- SELECIONAR O NOME DAS FAZENDAS, O IDENTIFICADOS DOS SENSORES E SE A UMIDADE ESTÁ DENTRO DA NORMALIDADE
SELECT f.nome as 'Nome da fazenda', idSensor, CASE 
  WHEN umidade > 50 THEN 'Verificar local do sensor, umidade elevada!'
  ELSE 'Umidade dentro da normalidade'
  END as Umidade
  FROM fazenda as f JOIN sensor
  ON fkFazenda = idFazenda
  LEFT JOIN dadosSensor
  ON fkSensor = idSensor
  ORDER BY nome;

-- SELECIONAR OS DADOS DO SENSOR E CALCULAR AS TEMPERATURAS MÁXIMAS, MÍNIMAS E MÉDIAS  
SELECT * FROM sensor;
SELECT avg(umidade)FROM dadosSensor;
SELECT min(umidade)FROM dadosSensor;
SELECT max(umidade)FROM dadosSensor;
