import express, { Express, Request, Response } from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

import MovieModel from './models/movieModel'

dotenv.config()

const app: Express = express()

app.use(express.json())

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Ecpress + TS Server")
    // res.json({Msg: "This is a GET /"})
})

// mongoose.connect
run().catch((err) => console.log('ERROR:', err))

async function run() {
    await connect(process.env.MONGO_URI!)
    app.listen(process.env.PORT, () => {
        console.log(`[server]: TS & Express Server is running at https://localhost:${port}`)
    })

    const dummy_movie = new MovieModel({
        name: 'RRR',
        release_date: new Date('2022-04-22'),
        release_year: '2022',
        otts_available: ['Prime', 'Hotstar']
    })

    await dummy_movie.save()
}