// REQUIRES
// const fs = require('fs');  /*ya viene creada por node*/
// const fs = require('express');  /*no esta en node pero es un paquete externo*/
// const fs = require('./fs');  /*son modulos nuestros que requerimos con un path*/

const argv = require('./config/yargs').argv;
var colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(err))
    break;

    default:
        console.log('Comando no reconocido');
    break;
}


// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


