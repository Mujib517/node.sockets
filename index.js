const socket = require('nodejs-websocket');

var server = socket.createServer(function (connection) {
    console.log("A new Connection",connection.key);

    connection.on("text", function (msg) {

        server.connections.forEach(function (con) {
            con.sendText(msg);
        });
    })
});

server.listen(3000, function () {
    console.log("Server running on 3000");
});



// var http=require("http");

// var server=http.createServer();

// server.listen(3000);
