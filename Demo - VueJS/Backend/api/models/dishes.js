const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    Material: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

var Dishes = mongoose.model('dish', dishSchema);

module.exports = Dishes;