let tasks = [];

module.exports = {
    getAllTasks: (req, res) => {
        res.json(tasks);
    },
    
    createTask: (req, res) => {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'El Título es requerido' });
        }
        const newTask = { id: tasks.length + 1, title, description, completed: false };
        tasks.push(newTask);
        res.status(201).json(newTask);
    },

    updateTask: (req, res) => {
        const { id } = req.params;
        const task = tasks.find(t => t.id === parseInt(id));
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        
        task.completed = !task.completed;
        res.json(task);
    },

    deleteTask: (req, res) => {
        const { id } = req.params;
        tasks = tasks.filter(t => t.id !== parseInt(id));
        res.status(204).send(); 
    },

    getTasksSummary: (req, res) => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(t => t.completed).length;
        res.json({
            totalTasks,
            completedTasks,
            pendingTasks: totalTasks - completedTasks
        });
    },
};
