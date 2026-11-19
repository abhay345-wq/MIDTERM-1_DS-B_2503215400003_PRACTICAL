
const fs = require('fs');

// CREATE - Create a file
fs.writeFileSync('data.txt', 'Hello Node.js');

// READ - Read file contents
let data = fs.readFileSync('data.txt', 'utf8');
console.log('File Content:', data);

// UPDATE - Append data to file
fs.appendFileSync('data.txt', '\nWelcome to CRUD Operations');

data = fs.readFileSync('data.txt', 'utf8');
console.log('Updated Content:', data);

// DELETE - Delete the file
fs.unlinkSync('data.txt');
console.log('File deleted successfully');
