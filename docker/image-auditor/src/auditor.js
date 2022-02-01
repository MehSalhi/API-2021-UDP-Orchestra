// se connecte au broadcast

// crée ou met à jour un tableau contenant le son de chaque musicien actif
// depuis les 5 dernières seconds

// un timer par musicien qui est réinitialisé à chaque fois qu'un son est
// recu de ce musicien. Si ce timer atteint 0, on supprime le musicien

// il se met en écoute sur un port en attente de client
// il envoie son tableau à chaque client connectés

const role = new Map();
role.set("ti-ta-ti", "piano");
role.set("trulu", "flute");
role.set("gzi-gzi", "violin");
role.set("boum-boum", "drum");
role.set("pouet", "trumpet");

// Importe le module express
var express = require('express');
var app = new express();

// module to work with UDP
const dgram = require('dgram');

const protocol = require('./orchestra-protocol');

// tableau de musiciens
var musicians = [];
const timers = new Map();

console.log("Auditor started...");

// listen
var server = app.listen(protocol.AUDITOR_PORT, function() {
    console.log("Accepting request on port " + protocol.AUDITOR_PORT);
});

// execute le code à chaque requête "GET /"
/*
app.get('/', function(req, res) {
    res.send(sendMusicians());
})

 */

// executed on each new client connection
server.on("connection", function(socket)  {
    socket.write(sendMusicians());
});

// Datagram socket to listen to datagrams incoming from musicians
const s = dgram.createSocket('udp4');
s.bind(protocol.PROTOCOL_PORT, function() {
    console.log("Joining multicast group " + protocol.PROTOCOL_MULTICAST_ADDRESS + ":" + protocol.PROTOCOL_PORT);
    s.addMembership(protocol.PROTOCOL_MULTICAST_ADDRESS);
});

// function executed each time a datagram is received
s.on('message', function(msg, source) {
    //console.log("Data has arrived: " + msg + ". Source port: " + source.port);
    var obj = JSON.parse(msg);
    if(!musicians.find(({ uuid }) => uuid === obj.uuid)) {
        console.log("New musician: " + obj.uuid + " " + obj.sound);
        musicians.push({
            uuid: obj.uuid,
            instrument: role.get(obj.sound),
            activeSince: new Date().toISOString()
        });
        timers.set(obj.entries().uuid, setTimeout(deleteMusician.bind(), 5000, obj.uuid));
    }
    else {
        clearTimeout(timers.get(obj.uuid));
        timers.set(obj.uuid, setTimeout(deleteMusician.bind(obj.uuid), 5000, obj.uuid));
    }
    //console.log(musicians.find(({ uuid }) => uuid === obj.uuid));
});


// fonction à executer à chaque connexion client
function sendMusicians(){
    //return JSON.stringify(Array.from(musicians.entries()));
    return JSON.stringify(Array.from(musicians));
}

// fonction à executer lorsqu'un musicien n'a pas émis de son depuis 5 secondes
function deleteMusician(uuid) {
    var index = musicians.indexOf(musicians.find(({ uuid }) => uuid === uuid));
    musicians.splice(index, 1);
    console.log("Deleted entry: " + uuid);
}
console.log("Auditor terminated");
