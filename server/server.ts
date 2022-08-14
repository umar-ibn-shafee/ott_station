import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Ecpress + TS Server")
    // res.json({Msg: "This is a GET /"})
})

app.listen(port, () => {
    console.log(`[server]: Server is running new at https://localhost:${port}`)
})