const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

router.get('/', dogsCtrl.index)
router.post('/', dogsCtrl.create)

module.exports = router