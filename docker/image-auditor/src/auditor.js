// se connecte au broadcast

// crée ou met à jour un tableau contenant le son de chaque musicien actif
// depuis les 5 dernières seconds

// un timer par musicien qui est réinitialisé à chaque fois qu'un son est
// recu de ce musicien. Si ce timer atteint 0, on supprime le musicien

// il se met en écoute sur un port en attente de client
// il envoie son tableau à chaque client connectés


// Importe le module express
var express = require('express');
var app = new express();

// module to work with UDP
const dgram = require('dgram');

const protocol = require('../../orchestra-protocol');
const {PROTOCOL_PORT, AUDITOR_PORT} = require("../../orchestra-protocol");

// tableau de musiciens
var musicians = [];

console.log("Auditor started...");

// listen
app.listen(AUDITOR_PORT, function() {
    console.log("Accepting request on port " + AUDITOR_PORT);
});

// execute le code à chaque requête "GET /"
app.get('/', function(req, res) {
    console.log("function executed");
    res.send(sendMusicians());
})

// Datagram socket to listen to datagrams incoming from musicians
const s = dgram.createSocket('udp4');
s.bind(protocol.PROTOCOL_PORT, function() {
    console.log("Joining multicast group " + protocol.PROTOCOL_MULTICAST_ADDRESS + ":" + protocol.PROTOCOL_PORT);
    s.addMembership(protocol.PROTOCOL_MULTICAST_ADDRESS);
});

// function executed each time a datagram is received
s.on('message', function(msg, source) {
    console.log("Data has arrived: " + msg + ". Source port: " + source.port);
    //console.log(msg.getData("uuid"));
    //console.log(msg.getData("sound"));
});

// fonction à executer à chaque connexion client
function sendMusicians(){
    return"coucou";

}


console.log("Auditor ended...");
