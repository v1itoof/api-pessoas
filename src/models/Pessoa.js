import Sequelize, { Model } from 'sequelize';

export default class Pessoa extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome não pode ser vazio',
          },
        },
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estado_civil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'pessoas',
    });
    return this;
  }
}
