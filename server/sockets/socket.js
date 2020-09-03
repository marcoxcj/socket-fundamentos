const { io } = require('../server');

//Detectar conexion de un cliente
io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Enviar información
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la app'
    });

    //Detecta desconexion de un cliente
    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: "Todo bien"
        //     });
        // } else {
        //     callback({
        //         respuesta: "Todo mal!!!!!!!!!!!!!!!!!"
        //     });
        // }


    });
});