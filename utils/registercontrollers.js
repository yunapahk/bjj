const positionRoutes = require('../routes/position')
const movementRoutes = require('../routes/position')
const submissionRoutes = require('../routes/position')

function registerControllers(app) {
    app.use('/positions', positionRoutes);
    app.use('/movements', movementRoutes);
    app.use('/submissions', submissionRoutes);
}

module.exports = registerControllers