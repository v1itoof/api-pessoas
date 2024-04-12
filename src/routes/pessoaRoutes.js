import { Router } from 'express';
import pessoaController from '../controllers/PessoaController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', pessoaController.index);
router.get('/:id', pessoaController.show);

router.post('/', loginRequired, pessoaController.store);
router.put('/:id', loginRequired, pessoaController.update);
router.delete('/:id', loginRequired, pessoaController.delete);

export default router;
