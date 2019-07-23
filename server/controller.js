const Brewery = require('./models');
const path = require('path');

module.exports = {
    findAll: (req, res) => {
        Brewery.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    findOne: (req, res) => {
        Brewery.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: (req, res) => {
        Brewery.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    catch: (req, res) => {
        res.sendFile(path.join(__dirname = '../client/build/index.html'));
    }
};