// Use express.Router by instaiating it
// Then use all methods for this route
// use rote handler functions from controler

import express, {Request, Response, Router} from 'express';
import {
    getMovies,
    getOneMovie,
    addMovie,
    updateMovie,
    deleteMOvie
} from '../controllers/moviesController'

const router: Router = express.Router()

router.get('/', getMovies)

router.get('/:id', getOneMovie)

router.post('/', addMovie)

router.patch('/:id', updateMovie)

router.delete('/:id', deleteMOvie)

export default router;