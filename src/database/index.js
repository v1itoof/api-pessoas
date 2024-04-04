import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pessoa from '../models/Pessoa';
import Endereco from '../models/Endereco';

const models = [Pessoa, Endereco];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
