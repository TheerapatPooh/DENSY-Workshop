import { Router } from "express";
import { addProfile, getAllProfile, getProfile, removeProfile, updateProfile } from "../Controller/profile-controller";

const router = Router()

router.get('/profile', getAllProfile)
router.get('/profile/:id', getProfile)
router.post('/profile', addProfile)
router.put('/profile/:id', updateProfile)
router.delete('/profile/:id', removeProfile)


module.exports = router