import { Request, Response } from "express"
import { prisma } from '../Utils/database'

export async function getAllUser( req: Request, res: Response) {
    try {
        const allUser = await prisma.user.findMany() 
        if (allUser){
            res.send(allUser)
        } else {
            res.status(404).send('User not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function getUser( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        const user = await prisma.user.findUnique({
            where: {id}
        }) 
        if (user){
            res.send(user)
        } else {
            res.status(404).send('User not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function addUser( req: Request, res: Response, ) {
    try {
        const { email, name, age } = req.body
        const user = await prisma.user.create({
            data: { email, name, age}
        })
        res.status(201).send(`User added with ID:${user.id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function updateUser( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        const { email, name, age } = req.body
        await prisma.user.update({
            where: { id },
            data: { email, name, age}
        })
        res.status(200).send(`User updated with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function removeUser( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        await prisma.user.delete({
            where: { id }
        })
        res.status(200).send(`User deleted with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}