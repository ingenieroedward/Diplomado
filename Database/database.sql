create database if not exists prestaservi;
use prestaservi;
create table if not exists clientes(
	id int not null primary key,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    ubicacion varchar(100) not null,
    email varchar(100) not null,
    contrasena varchar(100) not null
);
create table if not exists servicios(
	id int not null primary key,
    servicio varchar(100) not null,
    descripcion varchar(200) not null
);

create table if not exists trabajadores(
	id int not null primary key,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    ubicacion varchar(100) not null,
    email varchar(100) not null,
    id_servicio int not null,
    contrasena varchar(100) not null,
    foreign key(id_servicio) references servicios(id)
);

create table if not exists solicitud(
	id int not null primary key,
    id_cliente int not null,
    id_trabajador int not null,
    fecha date not null,
    hora time not null,
    estado varchar(100) not null,
    descripcion varchar(200),
    foreign key(id_cliente) references clientes(id),
    foreign key(id_trabajador) references trabajadores(id)
);

create table if not exists respuesta(
	id int not null primary key,
    id_solicitud int not null,
    precio float,
    telefono long,
    descripcion varchar(200) not null,
    foreign key(id_solicitud) references solicitud(id)
);