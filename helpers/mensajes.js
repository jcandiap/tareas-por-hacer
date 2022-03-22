require('colors');

const mostrarMenu = () => {

    console.clear();

    console.log('=============================='.green);
    console.log('     Seleccione una opción'.green);
    console.log('==============================\n'.green);

    console.log(`\t${ '1.'.green } Crear una tarea`);
    console.log(`\t${ '2.'.green } Listar tareas`);
    console.log(`\t${ '3.'.green } Listar tareas completadas`);
    console.log(`\t${ '4.'.green } Listar tareas pendientes`);
    console.log(`\t${ '5.'.green } Completar tarea(s)`);
    console.log(`\t${ '6.'.green } Borrar tarea`);
    console.log(`\t${ '0.'.green } Salir\n`);

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question('Seleccione una opción: ', (opt) => {
        readLine.close();
    });

}

const pausa = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`\nPresione ${ 'ENTER'.green } para continuar.\n`, () => {
        readLine.close();
    });
}

module.exports = {
    mostrarMenu,
    pausa
}