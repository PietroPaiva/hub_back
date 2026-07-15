import express from 'express'
import { prisma } from "../database/database";

const router = express.Router();

router.get('/', async (req, res) => {
    const fichas = await prisma.fichaPersonagem.findMany();
    res.json(fichas);
});

export default router;