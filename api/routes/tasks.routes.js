import express  from "express";
const tasksRoutes = express.Router()
import { saveTask, showingTasksInDb, deleteTaskInDb, updateTaskInDb, updateInProcess, getTaskBySearch, editTask } from "../controllers/tasks.js";

tasksRoutes.post("/saveNewTask", saveTask)

tasksRoutes.get("/getTasks/:userId", showingTasksInDb)

tasksRoutes.get("/getTaskBySearch/:searchParam", getTaskBySearch)

tasksRoutes.put("/modifiedTask", editTask)

tasksRoutes.post("/deleteTask", deleteTaskInDb)

tasksRoutes.put("/updateTaskToDone", updateTaskInDb)

tasksRoutes.put("/updateTaskToInProcess", updateInProcess)

export default tasksRoutes