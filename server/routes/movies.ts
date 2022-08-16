import express, {Request, Response, Router} from 'express';

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {

})

router.get('/:id')

router.post('/')

router.patch('/:id')

router.delete('/:id')

module.exports = router;