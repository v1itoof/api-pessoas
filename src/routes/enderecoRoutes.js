import { Router } from 'express';
import enderecoController from '../controllers/EnderecoController';

const router = new Router();

router.get('/enderecos/', enderecoController.index);
router.get('/:id', enderecoController.show);

router.post('/', enderecoController.store);
router.put('/', enderecoController.update);
router.delete('/', enderecoController.delete);

export default router;
