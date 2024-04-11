import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pessoa from '../models/Pessoa';
import Endereco from '../models/Endereco';
import User from '../models/User';

const models = [Pessoa, Endereco, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
