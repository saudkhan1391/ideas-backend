module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const ideas = require("../controllers/ideas.controller");
    // Create a new Note
    app.post('/notes', notes.create);
    app.post('/create-idea', ideas.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);
    app.get('/ideas', ideas.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}