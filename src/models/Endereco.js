import Sequelize, { Model } from 'sequelize';

export default class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true, // Pode ser nulo
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Endereco',
      tableName: 'enderecos',
    });
    return this;
  }

  static associate(models) {
    // Associação com a model Pessoa
    this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
  }
}
