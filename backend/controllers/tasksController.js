import Task from '../models/tasksModel.js';

export default {
    getAllTasks: (req, res) => {
        const tasks = Task.getAll();
        res.json(tasks);
    },
    
    createTask: (req, res) => {
        const { id, title, description, priority } = req.body;
        
        if (!title) {
            return res.status(400).json({ message: 'El Título es requerido' });
        }
        
        if (priority && (priority < 1 || priority > 5)) {
            return res.status(400).json({ message: 'La prioridad debe estar entre 1 y 5' });
        }
        
        const newTask = Task.create(title, description, priority || 1);
        res.status(201).json(newTask);
    },

    updateTask: (req, res) => {
        const { id } = req.params;
        const { completed } = req.body;
        
        const task = Task.update(parseInt(id), completed);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        
        res.json(task);
    },

    deleteTask: (req, res) => {
        const { id } = req.params;
        const deletedTask = Task.delete(parseInt(id));
        
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        
        res.status(200).json({ message: 'Tarea eliminada' });
    },

    getSummary: (req, res) => {
        const summary = Task.getSummary();
        res.json(summary);
    },
};
