import express from 'express'
import { fichaController } from '../controller/ficha';
import { authMiddleware } from "../middleware/auth.middleware"

const router = express.Router()

router.use(authMiddleware)

router.get('/',fichaController.findAll)
router.get('/:id', fichaController.findById)
router.post('/', fichaController.create)
router.put('/:id', fichaController.update )
router.delete('/:id', fichaController.delete)

export default router;