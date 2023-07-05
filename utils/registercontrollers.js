const positionRoutes = require('../routes/position')
const movementRoutes = require('../routes/movement')
const submissionRoutes = require('../routes/submission')

function registerControllers(app) {
    app.use('/positions', positionRoutes);
    app.use('/movements', movementRoutes);
    app.use('/submissions', submissionRoutes);
}

module.exports = registerControllers;