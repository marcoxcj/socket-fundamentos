var socket = io();

socket.on('connect', function() {
    console.log("conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Perdimos conexion con servidor");
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: "Marco",
    mensaje: "Hola mundo"
}, function(res) {
    console.log('server: ', res);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('server: ', mensaje);
});