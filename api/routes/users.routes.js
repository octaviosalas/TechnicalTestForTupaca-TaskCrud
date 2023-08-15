import express from "express"
const usersRoutes = express.Router()
import { login, register, getUserById } from "../controllers/users.js"


usersRoutes.get("/getUserById/:userId", getUserById)
usersRoutes.post("/register", register)
usersRoutes.post("/login", login)


export default usersRoutes;