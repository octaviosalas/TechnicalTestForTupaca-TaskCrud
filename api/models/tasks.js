import mongoose from "mongoose";


const tasksSchema = mongoose.Schema({ 
    title: { 
        type: String
    }, 
    description: { 
        type: String
    }, 
    date: { 
        type: String
    }, 
    done: { 
        type: Boolean,
        default: false
    },
    pending: { 
        type: Boolean,
        default: true
    },
    inProgres: { 
        type: Boolean,
        default: false
    },
    idtask: { 
        type: String,
        required: true
    },
    iduser: { 
        type: String
    }


})

const Tasks = mongoose.model("Tasks", tasksSchema)

export default Tasks;