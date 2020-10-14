const Idea = require("../models/idea.model");

exports.create = (req, res) => {
    let idea = new Idea({
        title: req.body.title || "Untitled Idea",
        description: req.body.description
    })
    idea.save().then(data => {
        res.send(data)
    }).catch(err => {
        console.log("e ", err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Idea."
        });
    })
}


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    // Retrieve and return all notes from the database.
        Idea.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };