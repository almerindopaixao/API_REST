import { Router } from 'express';
// Importando o controller
import UsuarioController from '../controllers/UsuarioController';
import loginRiquered from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', loginRiquered, UsuarioController.index); // LISTAR TODOS USUARIOS
// router.get('/:id', UsuarioController.show); // Lista Usuario

router.post('/', loginRiquered, UsuarioController.store);
router.put('/', loginRiquered, UsuarioController.update);
router.delete('/', loginRiquered, UsuarioController.delete);

export default router;
