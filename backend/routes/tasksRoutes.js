const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/tasks', tasksController.getAllTasks);
router.post('/tasks', tasksController.createTask);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.get('/tasks/summary', tasksController.getSummary);

module.exports = router;
