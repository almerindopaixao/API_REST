import { Router } from 'express';

// Importando o controller
import fotoController from '../controllers/FotoController';
import loginRiquered from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRiquered, fotoController.store);

// Se fosse varios arquifos upload.fields()

export default router;
