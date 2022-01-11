create schema brasil;
use brasil;

create table estados (
	id int(10) not null auto_increment primary key,
    nome varchar(100) not null
);

insert into estados (nome)
values ('Rio de Janeiro'), ('São Paulo'), ('Minas Gerais');