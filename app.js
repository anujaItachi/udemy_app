//console.log('starting the process:');

const fs = require('fs');
//const os = require('os');
const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');


//console.log(_.isString(true));
//console.log(_.isString('Anuja'));
//var filterArray = _.uniq(['Anuja', 'Patil', 1, 1, 2, 3, 4, 'Anuja'])
// var filterArray = _.uniq(['mike'])
// console.log(filterArray);



//console.log(user);

// fs.appendFile('greetings.txt','Hello ' + user.username + '!', function(err){
//     if(err){
//         console.log('unable to add');
//     }
// });

// var res = notes.addNote()
// console.log(res);


//console.log('Result:', notes.add(9, -2));

//var user = os.userInfo();
//fs.appendFile('greetings.txt', `Hello ${user.username}! and your age is ${notes.age}.`);

//console.log(process.argv);
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Title of the body',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list a new note')
    .command('read', 'read a new note', {
        title: titleOptions
    })
    .command('remove', 'remove a new note',{
        title: titleOptions,
    })
    .help()
    .argv;

//var command = process.argv[2];
var command = argv._[0];
//console.log('Commond: ', command);
//console.log('Process',process.argv);
//console.log(process.argv);
//console.log('Yargs', argv);

if (command === 'list') {
    //console.log('listing all notes');
    var allNotes = notes.getAll();  
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'add') {
    //console.log('adding new notes')
    //notes.addNotes(argv.title, argv.body);
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('note created');
        // console.log('---');
        // console.log(`title: ${note.title}`);
        // console.log(`body: ${note.body}`);
        notes.logNote(note);

    }else{
        console.log('note title added');
    }
} else if (command === 'read') {
    //console.log('reading notes');
    var note = notes.getNote(argv.title);
    if(note){
        console.log('note found');
        // console.log('---');
        // console.log(`title: ${note.title}`);
        // console.log(`body: ${note.body}`);
        notes.logNote(note);

    }else{
        console.log('NOTE NOT FOUND');
    }
} else if (command === 'remove') {
    //console.log('removing notes');
    //notes.removeNote(argv.title);
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
} else {
    console.log('command not available');
}