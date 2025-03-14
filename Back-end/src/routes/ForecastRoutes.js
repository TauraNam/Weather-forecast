import express from 'express'
import * as controller from '../controllers/ForecastController.js'

const router = express.Router()

router.get('/:city', controller.getForecast)

export default router