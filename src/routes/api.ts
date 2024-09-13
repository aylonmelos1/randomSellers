// src/routes/apiRoutes.ts

import { Router } from 'express';
import { getNumber } from '../services/randomSeller';

const router = Router();

router.get('/randomSeller', getNumber);

export default router;