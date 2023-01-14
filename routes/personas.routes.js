const { Router} = require('express')
const { listarPersonas } = require('../controllers/personas.controller')

const router = Router()

router.get('/personas', listarPersonas)

module.exports = router
