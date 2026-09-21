import { prisma } from "../database/database";

export const userRepository = {

    findByEmail: (email: string) => {
        return prisma.user.findUnique({
            where: {email: email},
        })
    },

    create: (email: string, senha: string) => {
        return prisma.user.create({
            data: {
                email,
                senha
            }
        })
    }
}