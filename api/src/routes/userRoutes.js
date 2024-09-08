import  { Router } from "express"
import { getUsers } from "../controller/userControler.js"

const router = Router()

router.get("/", getUsers)

export default router