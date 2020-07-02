class HomeController {
  async index(req, res) {
    return res.json('Bem vindo a API');
  }
}

export default new HomeController();
