"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    return res.json('Bem vindo a API');
  }
}

exports. default = new HomeController();
