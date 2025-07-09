import express from 'express';
import routes from './backend/routes/tasksRoutes.js';

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});

export default app;