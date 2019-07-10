const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/andculture_brewery', { useNewUrlParser: true });

const BrewerySchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    brewery_type: { type: String, required: true },
    street: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    website_url: { type: String, required: false },
    phone: { type: String, required: false },
    longitude: { type: String, required: false },
    latitude: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('Brewery', BrewerySchema);