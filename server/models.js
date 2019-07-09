const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/andculture_brewery', { useNewUrlParser: true });

const BrewerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    address: { type: String, required: true },
    website: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Brewery', BrewerySchema);