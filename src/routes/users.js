
import express from 'express';

import verifyToken from '../middleware/authMiddleware.js';

var router = express.Router();
import { getUsers, getUserById, createUser, updateUser, deleteUser, countUsers} from '../controllers/UsersController.js';

router.get('/', verifyToken, getUsers);
router.get('/count', countUsers);
router.get('/:id', getUserById);

router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);



export default router