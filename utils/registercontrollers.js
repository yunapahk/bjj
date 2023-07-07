const moveRoutes = require('../routes/move')

function registerControllers(app) {
    app.use('/move', moveRoutes);
}

module.exports = registerControllers;