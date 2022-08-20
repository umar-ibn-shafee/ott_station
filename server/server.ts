// instantiate Express app
// Create a route
// use middleware for accesing data in POST req.
// listen to a port
// to use process.env variable inport dotenv and call config on it.

import express, { Express } from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

import MovieModel from './models/movieModel'
import MOviesRouter from './routes/movies'

dotenv.config()
const port = process.env.PORT;

const app: Express = express()

app.use(express.json())

// Using routes insted of calling methods here
app.use('/api/movies', MOviesRouter)

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