const config = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', config)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', config)
    .help()
    .argv;


module.exports = {
    argv
};