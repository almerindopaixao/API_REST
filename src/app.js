import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database/index'; // importando o database
// Importando o express
import express from 'express';

// Rotas
import tokenRoutes from './routes/tokenRoutes';
import homeRoutes from './routes/homeRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  /**
   * Classe que controla o app
   */
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/usuarios/', usuarioRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/alunos/fotos/', fotoRoutes);
  }
}

export default new App().app;
