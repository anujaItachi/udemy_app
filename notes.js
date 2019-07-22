//console.log('starting notes.js');

//module.exports.age = 25;
//console.log(module);

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'newNote';
// };
const fs = require('fs');

var fetchNotes = () => {
    try{
        var data = fs.readFileSync('notes-da.json');
        return JSON.parse(data)
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-da.json', JSON.stringify(notes));
};

var addNotes = (title, body) => {
    //console.log('Adding the notes', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // try{
    //     var data = fs.readFileSync('notes-da.json');
    //     notes = JSON.parse(data)
    // } catch(e) {

    // }

    // var duplicateNotes = notes.filter((note) => {
    //     return note.title ===title;
    // });

    //In ES6 format Below:
    var duplicateNotes = notes.filter((note) => note.title ===title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        //fs.writeFileSync('notes-da.json', JSON.stringify(notes));
        saveNotes(notes);
        return note;
    }

    // notes.push(note);
    // fs.writeFileSync('notes-da.json', JSON.stringify(notes));
};

var getAll = () => {
    //console.log('Getting all notes');
    return fetchNotes();
};

var getNote = (title) => {
    //console.log('Getting notes', title);
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title ===title);
    return filterNotes[0];
};

var removeNote = (title) => {
    //console.log('Removing notes', title);
    var notes = fetchNotes();
    //filter notes, removing the one with the title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    //save new notes array

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    //break on this line and use repl to output note
    //use read ----title
    console.log('--');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
};

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote,
    logNote
};

// module.exports.add = (a, b) => {
//     return a+b ;
// }