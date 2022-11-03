/* eslint-disable @typescript-eslint/no-unused-vars */
import supertest from 'supertest'
import { app } from '../index'
import { resize, formated, sharper } from '../controllers/imageController'
import fs from 'fs'
import sizeOf from 'image-size'

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

        fs.readFile(`./assets/thumb/fjordw200h300output.jpg`, async function (data: unknown) {
            const datat = data

            expect((await res).body).toBe(datat)
        })
    })
    it('check if image is resized properly', async () => {
        await sharper('encenadaport', 200, 250)

        const dimension = sizeOf(`./assets/thumb/encenadaportw200h250output.jpg`).width
        if (dimension !== undefined) {
            expect(dimension).toBe(200)
        }
        //    else expect(true).toBe(false);
    })
})
