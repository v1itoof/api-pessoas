import { Router } from 'express';
import pessoaController from '../controllers/PessoaController';

const router = new Router();

router.get('/', pessoaController.index);
router.get('/:id', pessoaController.show);

router.post('/', pessoaController.store);
router.put('/', pessoaController.update);
router.delete('/', pessoaController.delete);

export default router;
