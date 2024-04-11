import { Router } from 'express';
import pessoaController from '../controllers/PessoaController';

const router = new Router();

router.get('/', pessoaController.index);
router.get('/:id', pessoaController.show);

router.post('/', pessoaController.store);
router.put('/:id', pessoaController.update);
router.delete('/:id', pessoaController.delete);

export default router;
