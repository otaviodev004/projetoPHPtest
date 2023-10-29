create database testPHP;
use testPHP;

create table login(
id int(11) auto_increment primary key,
email varchar(140) not null,
senha varchar(100) not null
);

create table permissoes(
id int(11) auto_increment primary key,
nome varchar(100) not null,
emailPermissao varchar(140) not null,
criarNew varchar(10) not null,
acessPermissao varchar(10) not null,
id_email int(11) not null,
status varchar(20) default('Enviado'),
foreign key (id_email) references id(email)
);


create table locais(
id int(11) auto_increment primary key,
nomeL varchar(100) not null,
cep char(8) not null,
cidade varchar(100) not null,
rua varchar(100) not null,
numero int(11) not null
);

##loguin para acessar a polataforma
INSERT INTO login VALUES (null, 'teste@gmail.com', 'vascoGanhou');
SELECT * FROM login WHERE (email = 'teste@gmail.com' and senha = 'vascoGanhou');
