import express from 'express'
import { router } from './Routes/imageRoute'
const app = express()
const port = 8080
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('home page')
})

app.use('/api', router)
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
export { app }
