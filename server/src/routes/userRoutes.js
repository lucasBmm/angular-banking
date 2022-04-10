const userController = require('../controllers/userController');
module.exports = (app) => {
    app.post('/enter', userController.post);
    app.put('/user/:id', userController.put);
    app.delete('/user/:id', userController.delete);
    app.get('/user', userController.get);
    app.get('/user/:id', userController.getById);
    app.get('/', userController.getPage);
}