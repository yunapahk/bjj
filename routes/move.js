const Router = require('express').Router 
const controller = require('../controllers/move') 

const router = Router() 

                // ROUTES //
// INDEX //
router.get('/', controller.index)

// NEW // 
router.get('new', controller.new)

// DESTROY //
router.delete('/:id', controller.destroy)

// CREATE //
router.post('/', controller.create)

// EDIT //
router.get('/:id/edit', controller.edit)

// SHOW //
router.get('/:id', controller.new)

module.exports = router