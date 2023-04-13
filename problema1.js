const USUARIO_NOMBRE_REGIS = "Ariel";
const USUARIO_CONTRASENIA_REGIS = "Alpha@43";
const USUARIO2_NOMBRE_REGIS = "Rafa";
const USUARIO2_CONTRASENIA_REGIS = "R@f@";

let usarioNombreIngresado = prompt("ingrese el usuario");
let usuarioContraseniaIngresada = prompt("ingresar contraseña");


if ((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGIS) && (usarioNombreIngresado == USUARIO_NOMBRE_REGIS) || (usuario2NombreIngresado == USUARIO2_NOMBRE_REGIS ) && (usuario2ContraseniaIngresada == USUARIO2_CONTRASENIA_REGIS) ) {
    document.write("Usuario y contraseña correctos");
} else { document.write("Usuario y contraseña incorrectos"); }

