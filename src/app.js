import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './database';

import express from 'express';
import pessoaRoutes from './routes/pessoaRoutes';
import enderecoRoutes from './routes/enderecoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/pessoas/', pessoaRoutes);
    this.app.use('/enderecos/', enderecoRoutes);
  }
}

export default new App().app;
