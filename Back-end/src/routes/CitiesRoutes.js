import express from 'express'
import * as controller from '../controllers/CitiesController.js'

const router = express.Router()

router.get('/', controller.getCities)

export default router
