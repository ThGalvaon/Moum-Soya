CREATE DATABASE soja;

use soja;

create table sensor (
idSensor int primary key auto_increment,
umidade float,
dtCaptura date
);
alter table sensor modify column dtCaptura datetime default current_timestamp;

SELECT * FROM sensor;