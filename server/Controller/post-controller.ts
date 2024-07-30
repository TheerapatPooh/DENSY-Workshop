import { Request, Response } from "express"
import { prisma } from '../Utils/database'

export async function getAllPost( req: Request, res: Response) {
    try {
        const allPost = await prisma.post.findMany() 
        if (allPost){
            res.send(allPost)
        } else {
            res.status(404).send('Post not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function getPost( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id)
        const post = await prisma.post.findUnique({
            where: {id}
        }) 
        if (post){
            res.send(post)
        } else {
            res.status(404).send('Post not found')
        }
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function addPost( req: Request, res: Response, ) {
    try {
        const { title, content, authorId } = req.body
        const post = await prisma.post.create({
            data: { title, content, authorId}
        })
        res.status(201).send(`Post added with ID:${post.id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function updatePost( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        const { title, content } = req.body
        await prisma.post.update({
            where: { id },
            data: { title, content }
        })
        res.status(200).send(`Post updated with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}

export async function removePost( req: Request, res: Response, ) {
    try {
        const id = parseInt(req.params.id, 10)
        await prisma.post.delete({
            where: { id }
        })
        res.status(200).send(`Post deleted with ID:${id}` )
    }
    catch (error) {
        res.status(500).send(error)        
    }
}