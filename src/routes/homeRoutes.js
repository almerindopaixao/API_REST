import { Router } from 'express';
// Importando o controller
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
