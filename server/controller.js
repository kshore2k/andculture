const Brewery = require('./models');

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
    }
};