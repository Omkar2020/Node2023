const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listener 
emitter.on('messageLogged',function(arg){
    console.log('Listened Called',arg);
})

//Raise an Event 
emitter.emit('messageLogged',{id:1,url:'http:/'});