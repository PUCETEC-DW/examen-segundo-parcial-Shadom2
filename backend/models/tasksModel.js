let tasks = [];
let currentId = 1;

const Task = {
    create: (title, description, priority) => {
        const newTask = { id: currentId++, title, description, completed: false, priority };
        tasks.push(newTask);
        return newTask;
    },
    getAll: () => tasks,
    update: (id, completed) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = completed;
            return task;
        }
    },
    delete: (id) => {
        const index = tasks.findIndex(t => t.id === id);
        return index !== -1 ? tasks.splice(index, 1)[0] : null;
    },
    getSummary: () => {
        const total = tasks.length;
        const completedCount = tasks.filter(t => t.completed).length;
        const pendingTasks = tasks.filter(t => !t.completed);
        const averagePriority = pendingTasks.length ? 
            pendingTasks.reduce((sum, t) => sum + t.priority, 0) / pendingTasks.length : 0;

        return { total, completed: completedCount, averagePriority };
    }
};

export default Task;
