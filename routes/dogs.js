const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

router.get('/', dogsCtrl.index)
router.get('/:id', dogsCtrl.show)
router.post('/', dogsCtrl.create)
router.post('/:id/cleanings', dogsCtrl.addCleaning)
router.put('/:id', dogsCtrl.update)
router.delete('/:id',dogsCtrl.delete)

module.exports = router