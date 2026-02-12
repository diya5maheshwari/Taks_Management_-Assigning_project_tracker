import Task from "../models/Task.js";

export const readtask = async (req, res) => {
  try {
    const tasks = await Task.find({owner:req.user.userId});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "error fetching tasks", err });
  }
};

// app.post('/tasks',async (req,res)=>{
//     try{
//         await Task.create({
//             title:req.body.title,
//             description:req.body.description,
//             status:req.body.status,
//         });
//         res.status(201).json({message:"task added successfully"})

//         }catch(err){
//             res.status(500).json({messages:"error adding task",err})
//         }
// })

export const addtask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields required" });
    }
    //ownership fixed
    const owner = req.user.userId;
    const task = await Task.create({ title, description, status, owner });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// app.param("id",(req,res,next,id)=>{
//     req.params.id=id;
//     next();
// });

export const deletetask = async (req, res) => {
  try {
    //find task
    const task = await Task.findById(req.params.id);

      if (!task) {
      return res.status(404).send({ message: "task not found" });
    }
    //autherization check
     if (!task.owner.equals(req.user.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    // delete after autherization 
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "error deleting task", err });
  }
};

export const updatetask = async (req, res) => {
  try {
    //fetch task
   const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    //autherization check
     if (!task.owner.equals(req.user.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    //update after autherization 

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );


    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// app.put('/tasks/:id',async (req,res)=>{
//     try{
//        const task= await Task.findByIdAndUpdate(req.params.id,{
//             title:req.body.title,
//             description:req.body.description,
//             status:req.body.status
//         });
//         res.status(200).json({message:"task updated successfully"});
//     }
//     catch(err){
//         res.status(500).json({message:"error updating task",err});
//     }
// })
