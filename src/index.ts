import express from 'express'
import { router } from './Routes/imageRoute'
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('home page')
})

app.use('/api', router)
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
export { app }
