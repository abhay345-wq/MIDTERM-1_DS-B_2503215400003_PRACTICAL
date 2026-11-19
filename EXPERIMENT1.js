const EventEmitter = require('events');

const element = new EventEmitter();

// Add event listener
element.on('click', (event) => {
    console.log('Button clicked!');
    console.log('Event data:', event);
});

// Simulate DOM event
element.emit('click', {
    type: 'click',
    target: 'button',
    message: 'Hello from Node.js'
});

// Remove event listener
element.removeAllListeners('click');