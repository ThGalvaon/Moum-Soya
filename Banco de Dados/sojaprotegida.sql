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

CREATE TABLE UsuarioAlerta (
fkUsuario int,
foreign key (fkusuario) references Usuario (idUsuario),
fkAlerta int,
foreign key (fkAlerta) references Alerta (idAlerta),
fkSensor int,
foreign key (fkSensor) references Sensor (idSensor),
fkDadosSensores int,
foreign key (fkDadosSensores) references DadosSensor (idDadosSensor),
primary key (fkUsuario, fkAlerta, fkSensor, fkDadosSensores)
);

-- SELECIONAR TODOS OS DADOS DA TABELA USUARIO
SELECT * FROM Usuario;

-- SELECIONAR TODOS OS DADOS DA TABELA USUARIO ORDENADOS POR NOME FANTASIA
SELECT * FROM Usuario ORDER BY nomeFantasia;

-- SELECIONAR OS REPRESENTANTES QUE POSSUAM 'MARIA' NO NOME
SELECT representante FROM Usuario
WHERE representante LIKE '%Maria%';

-- SELECIONAR TODOS OS DADOS DA TABELA ENDEREÇO
SELECT * FROM Endereco;

-- SELECIONAR OS DADOS DAS FAZENDAS QUE POSSUEM MAIS DE 10 HECTARES
SELECT u.nomeFantasia, e.qtdTalhoes from Usuario as u join Endereco as e on e.fkUsuario = u.idUsuario where qtdTalhoes > 10;

-- SELECIONAR OS DADOS DOS SENSORES
SELECT * FROM Sensor;

-- SELECIONAR OS DADOS DOS SENSORES QUE ESTÃO MONITORANDO UMIDADES ACIMA DE 40
SELECT * FROM dadosSensor
WHERE umidade > 40;

-- SELECIONAR O NOME DAS FAZENDAS E VERIFICAR OS SENSORES EM FUNCIONAMENTO
select s.statusSensor, u.nomeFantasia from Sensor as s join Endereco as e on s.fkEndereco = e.idEndereco join Usuario as u on e.fkUsuario = u.idUsuario;

-- SELECIONAR OS DADOS DO SENSOR E CALCULAR AS TEMPERATURAS MÁXIMAS, MÍNIMAS E MÉDIAS  
SELECT * FROM sensor;
SELECT avg(umidade)FROM dadosSensor;
SELECT min(umidade)FROM dadosSensor;
SELECT max(umidade)FROM dadosSensor;
