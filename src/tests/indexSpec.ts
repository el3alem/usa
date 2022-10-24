/* eslint-disable @typescript-eslint/no-unused-vars */
import supertest from 'supertest'
import { app } from '../index'
import { resize, formated } from '../../controllers/imageController'

const req = supertest(app)
describe('test end point', () => {
    it('get/images end point', async () => {
        const res = req.get('/api/images?filename=fjord&width=200&height=300')
        expect((await res).status).toBe(200)
    })
})
describe('functionality test', () => {
    it('get/images end point', async () => {
        const res = req.get('/api/images?filename=fjord&width=200&height=300')

        expect((await res).status).toBe(200)
    })
})
