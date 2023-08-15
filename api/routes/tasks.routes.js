import express  from "express";
const tasksRoutes = express.Router()
import { saveTask, showingTasksInDb, deleteTaskInDb } from "../controllers/tasks.js";

tasksRoutes.post("/saveNewTask", saveTask)

tasksRoutes.get("/getTasks/:userId", showingTasksInDb)

tasksRoutes.post("/searchSpecificTask")

tasksRoutes.post("/modifiedTask")

tasksRoutes.post("/deleteTask", deleteTaskInDb)

tasksRoutes.put("/updateTask")

export default tasksRoutes