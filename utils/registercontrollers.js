const moveRoutes = require('../routes/move')
const userRoutes = require('../routes/user')

function registerControllers(app) {
    app.use('/move', moveRoutes);
    app.use('/user', userRoutes);
}

module.exports = registerControllers;