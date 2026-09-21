import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { env } from "../config/env"
import { userRepository } from "../repository/user.repository";

export const userService = {

    register: async (email: string, senha: string) => {
        
        const usuarioExistente = await userRepository.findByEmail(email)

        if (usuarioExistente) {
            throw new Error("Email já cadastrado")
        } 

        const senhaHash = await bcrypt.hash(senha,10)

        const usuario = await userRepository.create(email, senhaHash)

        return {
            id: usuario.id,
            email: usuario.email
        }

    },

    login: async (email: string, senha: string) => {

        const usuario = await userRepository.findByEmail(email)

        if (!usuario) {
            throw new Error("Usuário não cadastrado")
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if (!senhaCorreta) {
            throw new Error("Senha Inválida")
        }

        const token = jwt.sign(
            { userId: usuario.id },
            env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        return {
            token, 
            usuario: {
                id: usuario.id,
                email: usuario.email
            }
        }
    }

}