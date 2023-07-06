const movementRoutes = require('../routes/movement')

function registerControllers(app) {
    app.use('/movements', movementRoutes);

}

module.exports = registerControllers;