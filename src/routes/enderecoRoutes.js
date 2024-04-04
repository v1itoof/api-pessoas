import { Router } from 'express';
import enderecoController from '../controllers/EnderecoController';

const router = new Router();

router.get('/', enderecoController.index);
router.get('/:id', enderecoController.show);

router.post('/', enderecoController.store);
router.put('/:id', enderecoController.update);
router.delete('/', enderecoController.delete);

export default router;
