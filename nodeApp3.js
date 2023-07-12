
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listener 
emitter.on('messageLogged',function(){
    console.log('Listened Called');
})

//Raise an Event 
emitter.emit('messageLogged');