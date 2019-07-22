// var obj = {
//     name: "Andrew"
// };

// var strobj = JSON.stringify(obj);
// console.log(typeof strobj);
// console.log(strobj);

// var person = '{"name": "Anuja", "age": 25}';
// var perobj = JSON.parse(person);
// console.log(typeof perobj);
// console.log(perobj);

const fs = require('fs');

var longstr = {
    title: 'my note book',
    body: 'is beautiful'
};

var longstrnote = JSON.stringify(longstr);
fs.writeFileSync('note.json', longstrnote);
var string = fs.readFileSync('note.json');

var notes = JSON.parse(string);

console.log(typeof notes);
console.log(notes.title);

