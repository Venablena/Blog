console.log('routes here, hi!');
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/', ctrl.getAll)
// router.post('/', ctrl.create)
// router.get('/:id', ctrl.getOne)
// router.put('/:id', ctrl.update)
// router.delete('/:id', ctrl.remove)

module.exports = router
