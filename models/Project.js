const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postedDate : {
        type: Date,
        default: Date.now
    },
    members : [{
        type: String,
        required: true
    }],
    maxCapacity: {
        type: Number,
        required: true
    },
    tags: [{
        type: String
    }]
});

module.exports = mongoose.model ('Project', projectSchema);