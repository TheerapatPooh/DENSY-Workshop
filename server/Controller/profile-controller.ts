import { Request, Response } from "express"
import { prisma } from '../Utils/database'

export async function getAllProfile( req: Request, res: Response) {
    try {
        const allProfile = await prisma.profile.findMany() 
        if (allProfile){
            res.send(allProfile)
        } else {
            res.status(404).send('Profile not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function getProfile( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        const profile = await prisma.profile.findUnique({
            where: {id}
        }) 
        if (profile){
            res.send(profile)
        } else {
            res.status(404).send('Profile not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function addProfile( req: Request, res: Response, ) {
    try {
        const { bio, userId, } = req.body
        const profile = await prisma.profile.create({
            data: { bio, userId }
        })
        res.status(201).send(`Profile added with ID:${profile.id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function updateProfile( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        const { bio } = req.body
        await prisma.profile.update({
            where: { id },
            data: { bio}
        })
        res.status(200).send(`Profile updated with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function removeProfile( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        await prisma.profile.delete({
            where: { id }
        })
        res.status(200).send(`Profile deleted with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}