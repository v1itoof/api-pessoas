import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    try {
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
      const enderecoId = parseInt(req.body.id);

      const endereco = await Endereco.findByPk(enderecoId);
      return res.json(endereco);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.body.id);

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
      const endereco = await Endereco.findByPk(req.body.id);

      if (!req.body.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }
      if (!pessoa) {
        return res.status(400).json({
          errors: ['Pessoa não encontrada!'],
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
