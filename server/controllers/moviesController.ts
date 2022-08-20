// these are route handler functions for particular route
// export each function individually
// each function at the end sends a response either 400 or 200 depending on the scenario.
// routes involving id's check id validity to avoide mongoose invalid ID errors ie "Internal Server Error" by "mongoose.Types.ObjectId.isValid(id)"

import { Request, Response } from 'express'
import MovieModel from '../models/movieModel'

const getMovies = (req: Request, res: Response) => {
    res.send("Ecpress + TS Server")
    // res.json({Msg: "This is a GET /"})
}

const getOneMovie = () => { }

const addMovie = () => { }

const updateMovie = () => { }

const deleteMOvie = () => { }

export { getMovies, getOneMovie, addMovie, updateMovie, deleteMOvie }