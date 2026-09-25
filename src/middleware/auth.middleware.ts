import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { env } from "../config/env"

interface TokenPayload {
    userId: number
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido" })
    }

    const [, token] = authHeader.split(" ")

    if (!token) {
        return res.status(401).json({ error: "Token mal formatado" })
    }

    try {
        const payload = jwt.verify(token, env.JWT_SECRET) as TokenPayload
        req.userId = payload.userId
        next()
    } catch (error) {
        return res.status(401).json({ error: "Token inválido ou expirado" })
    }
}