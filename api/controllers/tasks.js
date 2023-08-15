import Tasks from "../models/tasks.js";
import { format } from 'date-fns';


export const saveTask = async (req, res) => {
  const { title, description, date, idtask, iduser } = req.body;

  try {
    const formattedDate = format(new Date(date), 'dd-MM-yyyy');

    const newTask = new Tasks({
      title,
      description,
      date: formattedDate,
      idtask,
      iduser,
    });

    await newTask.save();
    res.send('Task has been saved');

  } catch (err) {
    console.log(err);
    res.send('Errors detected');
  }
};


  export const showingTasksInDb = async (req, res) => { 
    const { userId } = req.params;
   
    try {
      const docs = await Tasks.find({ iduser: userId });
       res.send(docs)
      
    } catch (err) {
        res.send(err)
        console.log("Hay errores para obtener las tareas", err)
    }

}  


export const deleteTaskInDb =  async (req, res) => { 
  
  console.log(req.body)

  try {
    await Tasks.findOneAndDelete({idtask: req.body.idtask})
    res.json({message: "The task has been deleted"})
  } catch (error) {
     res.send(error)
     
  }

}


export const updateTaskInDb = async (req, res) => { 
   try {
       await Tasks.findOneAndUpdate({idtask: req.body.idtask}, { 
         done: true,
         pending: false,
         inProgres: false
       })
       res.json({message:"The task was marked as Done! Congratulations"})
   } catch (err) {
      res.send(err)
   }
}


export const updateInProcess = async (req, res) => { 
  try {
    await Tasks.findOneAndUpdate({idtask: req.body.idtask}, { 
      done: false,
      pending: false,
      inProgres: true
    })
    res.json({message:"The task was marked as In Process! Lets Do It"})
} catch (err) {
   res.send(err)
}
}


export const searchById = async (req, res) => { 
  try {
     const taskSearch = await Task.find({idtask: req.body.idtask})
     res.send(taskSearch)
  } catch (error) {
    res.send(error)
  }
}

export const getTaskBySearch = async (req, res) => {
  const { searchParam } = req.params;
  const regex = new RegExp(searchParam, 'i');

  Tasks.find({
    $or: [
      { title: regex },
      { description: regex },   
    ],
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => console.log(err));
};


export const editTask = async (req, res) => { 


  try {
    console.log(req.body)
    console.log("Esta pasando algo")
    await Tasks.findOneAndUpdate({idtask: req.body.idtask}, { 
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      iduser: req.body.iduser
    })
    res.json({message:"The task was marked as In Process! Lets Do It"})
} catch (err) {
   res.send(err)
}


}

