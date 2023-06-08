import { Router } from 'express';
import { testDb } from '../controllers/index.controller.js';

const router = Router();

router.get('/testdb', testDb);

export default router;
