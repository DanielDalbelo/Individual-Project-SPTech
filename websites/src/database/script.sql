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
dataHora datetime,
pontuacao int,
constraint pkUsuarioParticipouQuiz primary key (idUsuarioParticipouQuiz, fkUsuario, fkQuiz),
constraint fkUsuarioParticipou foreign key (fkUsuario) references Usuario(idUsuario),
constraint fkQuiz foreign key (fkQuiz) references Quiz(idQuiz)
);

create table comentario(
idComentario int,
fkUsuario int,
conteudo varchar(500),
dataHora datetime,
constraint pkUsuarioComentario primary key (idComentario, fkUsuario),
constraint fkUsuarioComentario foreign key (fkUsuario) references Usuario(idUsuario)
);

