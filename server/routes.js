const controller = require('./controller');

module.exports = (app) => {
    app.get('/api/breweries', controller.findAll);
    app.get('/api/breweries/:id', controller.findOne);
    app.post('/api/breweries', controller.create);
    app.get('*', controller.catch);
};