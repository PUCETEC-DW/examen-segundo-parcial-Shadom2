import express from 'express';
import tasksController from '../controllers/tasksController.js';

const router = express.Router();

router.get('/tasks', tasksController.getAllTasks);
router.post('/tasks', tasksController.createTask);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.get('/tasks/summary', tasksController.getSummary);

export default router;
