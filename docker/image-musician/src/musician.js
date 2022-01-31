var protocol = require('../../orchestra-protocol');

var dgram = require('dgram');

var s = dgram.createSocket('udp4');

const { v4: uuidv4 } = require('uuid');
var uuid = uuidv4();

//console.log("uuid: "+ uuid);
function Musician(instrument){
    this.instrument = instrument;
    if(instrument === "piano"){
        sound = "ti-ta-ti";
    }else if(instrument === "trumpet"){
        sound = "pouet";
    }else if(instrument === "flute"){
        sound = "trulu";
    }else if(instrument === "violin"){
        sound = "gzi-gzi";
    }else if(instrument === "drum"){
        sound = "boum-boum";
    }else{
        return;
    }

    Musician.prototype.update = function (){
        var emission = {
            uuid : uuid,
            sound : sound
        }

        var payload = JSON.stringify(emission);

        message = new Buffer(payload);

        s.send(message, 0, message.length, protocol.PROTOCOL_PORT, protocol.PROTOCOL_MULTICAST_ADDRESS, function(err, bytes) {
            console.log("Sending payload: " + payload + " via port " + s.address().port);
        });
    }

    setInterval(this.update.bind(this), 1000);
}

var instrument = process.argv[2];
var sound;
new Musician(instrument);