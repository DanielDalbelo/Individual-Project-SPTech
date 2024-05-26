create database IndividualProject;

use IndividualProject;

create table Usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
email varchar(100),
senha varchar(255)
)auto_increment = 101;

create table Quiz(
idQuiz int primary key auto_increment,
tituloQuiz varchar(45)
);

create table UsuarioParticipouQuiz(
idUsuarioParticipouQuiz int,
fkUsuario int,
fkQuiz int,
periodo date,
hora time,
pontuacao int,
concluido tinyint,
constraint pkUsuarioParticipouQuiz primary key (idUsuarioParticipouQuiz, fkUsuario, fkQuiz),
constraint fkUsuarioParticipou foreign key (fkUsuario) references Usuario(idUsuario),
constraint fkQuiz foreign key (fkQuiz) references Quiz(idQuiz)
);

create table comentario(
idComentario int,
fkUsuario int,
conteudo varchar(500),
periodo date,
hota time,
constraint pkUsuarioComentario primary key (idComentario, fkUsuario),
constraint fkUsuarioComentario foreign key (fkUsuario) references Usuario(idUsuario)
);

insert into Quiz values
(default, 'Quiz jogos');

-- API insert's
/*
insert into Usuario values
(default, ${user}, ${email}, ${senha});

insert into UsuarioParticipouQuiz values
(default, ${fkUser}, ${fkQuiz}, now(), now(), ${pontuacao});
*/

-- API select's

-- KPI's

/*
select count(idUsuarioParticipouQuiz) from UsuarioParticipouQuiz
	where fkUser = ${idUser} and fkQuiz = 1;
    
select avg(pontuacao) from UsuarioParticipouQuiz
	where fkUser = ${idUser} and fkQuiz = 1;

select max(pontuacao) from UsuarioParticipouQuiz
	where fkUser = ${idUser} and fkQuiz = 1;
    
select count(pontuacao) from UsuarioParticipouQuiz
	where fkUser = ${idUser} and fkQuiz = 1 and pontuacao = 200;

-- Gráficos

select periodo, count(idUsuarioParticipouQuiz) from UsuarioParticipouQuiz
	where periodo = now();
    
select count(upq.concluido) from UsuarioParticipouQuiz as upq
	where upq.concluido = 1;
    
select count(upq.concluido) from UsuarioParticipouQuiz as upq
	where upq.concluido = 0;
*/

-- drop database IndividualProject;