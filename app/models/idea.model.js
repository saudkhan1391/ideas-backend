const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({
    title: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Idea', IdeaSchema);