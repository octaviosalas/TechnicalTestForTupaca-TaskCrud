import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import tasksRoutes from "./routes/tasks.routes.js"
import usersRoutes from "./routes/users.routes.js"
import connectDataBase from "./database/connectdb.js"


const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))

app.use(tasksRoutes)
app.use(usersRoutes)

app.get('/', (req, res) => {
    res.send('Server')
  })

app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
    connectDataBase()
  })