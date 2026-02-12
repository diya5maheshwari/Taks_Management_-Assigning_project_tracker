import express from 'express';
import {readtask,addtask,updatetask,deletetask} from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router=express.Router();

router.get('/task',authMiddleware,readtask);
router.post('/task',authMiddleware,addtask);
router.put('/task/:id',authMiddleware,updatetask);
router.delete('/task/:id',authMiddleware,deletetask);

export default router;