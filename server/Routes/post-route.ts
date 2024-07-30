import { Router } from "express";
import { addPost, getAllPost, getPost, removePost, updatePost } from "../Controller/post-controller";

const router = Router()

router.get('/post', getAllPost)
router.get('/post/:id', getPost)
router.post('/post', addPost)
router.put('/post/:id', updatePost)
router.delete('/post/:id', removePost)


module.exports = router