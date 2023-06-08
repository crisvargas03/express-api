import { Router } from 'express';
import {
    create,
    get,
    getById,
    remove,
    update,
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', get);
router.post('/employees', create);
router.get('/employees/:id', getById);
router.patch('/employees/:id', update);
router.delete('/employees/:id', remove);

export default router;
