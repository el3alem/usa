import express from 'express'
import { resize, formated } from '../controllers/imageController'

const router = express.Router()
console.log('hiiiiiiii')
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
router.get('/images', resize, formated, () => {})
export { router }
