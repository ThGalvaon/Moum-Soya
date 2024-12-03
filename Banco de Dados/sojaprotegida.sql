CREATE DATABASE sojaprotegida;
USE sojaprotegida;

-- CRIAÇÃO DAS TABELAS
CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
	razao_social varchar(45),
	nome_fantasia varchar(50),
	cnpj char(14),
	repre varchar(45),
	email varchar(70),
	senha varchar(30)
);

select * from usuario;

INSERT INTO usuario (razao_social, nome_fantasia, cnpj, repre, email, senha) VALUES
('Empresa A Ltda', 'Fantasia A', '12345678000195', 'João Silva', 'contato@empresaA.com.br', 'Senha#2024');

CREATE TABLE endereco (
	idEndereco int primary key auto_increment,
	cidade varchar(45) not null,
	bairro varchar(45) not null,
	logradouro varchar(45) not null,
	numero varchar(5) not null,
	cep char(8) not null,
	qtdTalhoes int,
	fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario)
);

INSERT INTO endereco (cidade, bairro, logradouro, numero, cep, qtdTalhoes, fkUsuario) VALUES
('União da Serra', 'Santa Maria', 'Avenida Paulista', '100', '01311000', 4, 1);

CREATE TABLE Sensor (
	idSensor int primary key auto_increment,
    local_talhao varchar(45),
    statusSensor varchar(45),
    fkEndereco int,
    foreign key (fkEndereco) references endereco (idEndereco)
);

INSERT INTO Sensor (local_talhao, statusSensor, fkEndereco) VALUES
('Talhão 1', 'Ativo', 1);

CREATE TABLE DadosSensor (
	idDadosSensor int auto_increment,
	fkSensor int,
	primary key (idDadosSensor, fkSensor),
    foreign key (fkSensor) references Sensor (idSensor),
	umidade float,
	dtCaptura datetime
);

select * from DadosSensor;

CREATE TABLE Alerta (
idAlerta int auto_increment,
fkSensor int,
fkDadosSensores int,
primary key (idAlerta, fkSensor, fkDadosSensores),
foreign key (fkSensor) references Sensor (idSensor),
foreign key (fkDadosSensores) references DadosSensor (idDadosSensor),
statusAlerta varchar(45),
tempo_alerta varchar(45),
dtAlerta datetime,
check (statusAlerta in('Umidade elevada', 'Umidade alta', 'Umidade crítica'))
);

CREATE TABLE UsuarioAlerta (
fkUsuario int,
foreign key (fkusuario) references usuario (idUsuario),
fkAlerta int,
foreign key (fkAlerta) references Alerta (idAlerta),
fkSensor int,
foreign key (fkSensor) references Sensor (idSensor),
fkDadosSensores int,
foreign key (fkDadosSensores) references DadosSensor (idDadosSensor),
primary key (fkUsuario, fkAlerta, fkSensor, fkDadosSensores)
);

INSERT INTO usuario (email, senha) VALUES
('admin@admin', 'admin');
