import Endereco from '../models/Endereco';
import Pessoa from '../models/Pessoa';

class EnderecoController {
  async store(req, res) {
    try {
      const pessoaId = req.body.pessoa_id;

      const pessoa = await Pessoa.findByPk(pessoaId);

      if (!pessoa) {
        return res.status(404).json({
          errors: ['Pessoa não existe!'],
        });
      }

      const novoEndereco = await Endereco.create(req.body);
      return res.json(novoEndereco);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const enderecos = await Endereco.findAll();
      return res.json(enderecos);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const pessoaId = parseInt(req.params.id);

      const endereco = await Endereco.findAll({
        where: { pessoa_id: pessoaId },
      });
      return res.json(endereco);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.params.id);

      if (!endereco) {
        return res.status(404).json({
          errors: ['Endereço não encontrado!'],
        });
      }

      const novoDados = await endereco.update(req.body);
      return res.json(novoDados);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }
      const endereco = await Endereco.findByPk(req.params.id);

      if (!endereco) {
        return res.status(400).json({
          errors: ['endereco não encontrada!'],
        });
      }

      await endereco.destroy();
      return res.json(endereco);
    } catch (e) {
      console.log(e);
      return res.status(400).json(null);
    }
  }
}

export default new EnderecoController();
