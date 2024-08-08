
import express from 'express';


var router = express.Router();
import { getTasks, getTaskById, createTask, updateTask, deleteTask, countTasks} from '../controllers/tasksController.js';

router.get('/', getTasks);
router.get('/count', countTasks);
router.get('/:id', getTaskById);

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);



export default router