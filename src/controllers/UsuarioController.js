import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(usuarios);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      const { nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        erros: ['Usuário não encontrado'],
      });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          erros: ['O usuário que você quer deletar não existe'],
        });
      }

      await usuario.destroy();
      return res.json({
        delete: 'Usuário apagado com sucesso',
      });
    } catch (e) {
      return res.status(400).json({
        erros: [`Nenhum usuário encontrado com o ID: ${req.params.id}`],
      });
    }
  }
}

export default new UsuarioController();
