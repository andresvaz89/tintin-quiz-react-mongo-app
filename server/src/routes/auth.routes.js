import { Router } from 'express';
import { registerQuestion } from '../controllers/auth.controller.js';

const router = Router();

router.post('/newQuestion', registerQuestion);

export default router;
