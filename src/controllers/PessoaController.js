import Pessoa from '../models/Pessoa';

class PessoaController {
  async store(req, res) {
    try {
      const novaPessoa = await Pessoa.create(req.body);
      return res.json(novaPessoa);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.json(pessoas);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const pessoaId = parseInt(req.params.id);

      const pessoa = await Pessoa.findByPk(pessoaId);

      return res.json(pessoa);
    } catch (e) {
      return res.json(req.params);
    }
  }

  // Update
  async update(req, res) {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);

      if (!pessoa) {
        return res.status(404).json({
          errors: ['Pessoa não encontrada!'],
        });
      }

      const novoDados = await pessoa.update(req.body);
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
      const pessoa = await Pessoa.findByPk(req.params.id);

      if (!pessoa) {
        return res.status(400).json({
          errors: ['Pessoa não encontrada!'],
        });
      }

      await pessoa.destroy();
      return res.json(pessoa);
    } catch (e) {
      console.log(e);
      return res.status(400).json(null);
    }
  }
}

export default new PessoaController();
