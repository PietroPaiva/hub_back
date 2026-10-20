import { Prisma } from "../generated/prisma/client";
import { prisma } from "../database/database"

function limpar<T extends object>(obj: T): T {
    const { id, fichaId, aptidoesId, ...resto } = obj as any
    return resto as T
}

export const fichaPersonagemRepository = {
    findAll: (userId: number) => {
        return prisma.fichaPersonagem.findMany({ 
            where: {userId: userId},
            include: {
                 aptidoes: {
                    include: {
                    instintos: true,
                    conhecimentos: true,
                    praticas: true
                    }
                 },
                assimilacoes: true,
                caracteristica: true,
                descricao: true,
                determinacao: true,
                inventario: true,
                saude: true,
            }
         })
    },

    findById: (fichaId: number , userId: number) => {
        return prisma.fichaPersonagem.findFirst({ 
            where: {id: fichaId, userId: userId},
            include: {
                aptidoes: {
                    include: {
                    instintos: true,
                    conhecimentos: true,
                    praticas: true
                    }
                 },
                assimilacoes: true,
                caracteristica: true,
                descricao: true,
                determinacao: true,
                inventario: true,
                saude: true,
            }
        })
    },

    create: (
    userId: number,
    aptidoes: {
        instintos: Prisma.InstintosCreateWithoutAptidoesInput,
        conhecimentos: Prisma.ConhecimentosCreateWithoutAptidoesInput,
        praticas: Prisma.PraticasCreateWithoutAptidoesInput
    },
    assimilacoes: Prisma.AssimilacoesCreateWithoutFichaInput[],
    caracteristica: Prisma.CarcteristicaCreateWithoutFichaInput[],
    descricao: Prisma.DescricaoCreateWithoutFichaInput,
    determinacao: Prisma.DeterminacaoCreateWithoutFichaInput,
    inventario: Prisma.InventarioCreateWithoutFichaInput[],
    saude: Prisma.SaudeCreateWithoutFichaInput
) => {
    return prisma.fichaPersonagem.create({
        data: {
            userId,
            aptidoes: {
                create: {
                    instintos: { create: aptidoes.instintos },
                    conhecimentos: { create: aptidoes.conhecimentos },
                    praticas: { create: aptidoes.praticas },
                }
            },
            assimilacoes: { create: assimilacoes },
            caracteristica: { create: caracteristica },
            descricao: { create: descricao },
            determinacao: { create: determinacao },
            inventario: { create: inventario },
            saude: { create: saude }
        },
        include: {
            aptidoes: { include: { instintos: true, conhecimentos: true, praticas: true } },
            assimilacoes: true,
            caracteristica: true,
            descricao: true,
            determinacao: true,
            inventario: true,
            saude: true
        }
        })
    },

    delete: (fichaId: number, userId: number) => {
        return prisma.fichaPersonagem.deleteMany({ where: {id: fichaId, userId: userId}})
    },

    update: (
    fichaId: number,
    aptidoes: {
        instintos: Prisma.InstintosUpdateWithoutAptidoesInput,
        conhecimentos: Prisma.ConhecimentosUpdateWithoutAptidoesInput,
        praticas: Prisma.PraticasUpdateWithoutAptidoesInput
    },
    assimilacoes: Prisma.AssimilacoesCreateWithoutFichaInput[],
    caracteristica: Prisma.CarcteristicaCreateWithoutFichaInput[],
    descricao: Prisma.DescricaoUpdateWithoutFichaInput,
    determinacao: Prisma.DeterminacaoUpdateWithoutFichaInput,
    inventario: Prisma.InventarioCreateWithoutFichaInput[],
    saude: Prisma.SaudeUpdateWithoutFichaInput
) => {
    return prisma.fichaPersonagem.update({
        where: { id: fichaId },
        data: {
            aptidoes: {
                update: {
                    instintos: { update: limpar(aptidoes.instintos) },
                    conhecimentos: { update: limpar(aptidoes.conhecimentos) },
                    praticas: { update: limpar(aptidoes.praticas) },
                }
            },
            descricao: { update: limpar(descricao) },
            determinacao: { update: limpar(determinacao) },
            saude: { update: limpar(saude) },
            assimilacoes: { deleteMany: {}, create: assimilacoes.map(limpar) },
            caracteristica: { deleteMany: {}, create: caracteristica.map(limpar) },
            inventario: { deleteMany: {}, create: inventario.map(limpar) },
        },
        include: {
            aptidoes: { include: { instintos: true, conhecimentos: true, praticas: true } },
            assimilacoes: true,
            caracteristica: true,
            descricao: true,
            determinacao: true,
            inventario: true,
            saude: true
        }
    })
    },


}
