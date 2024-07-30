import { Router } from "express";
import { addUser, getAllUser, getUser, removeUser, updateUser } from "../Controller/user-controller";

const router = Router()

router.get('/user', getAllUser)
router.get('/user/:id', getUser)
router.post('/user', addUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', removeUser)



module.exports = router