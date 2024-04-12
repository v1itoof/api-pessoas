import Sequelize, { Model } from 'sequelize';

export default class Pessoa extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: true,
            msg: 'Nome não pode ser vazio',
          },
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Sexo não pode ser nulo',
          },
          isIn: {
            args: [['Masculino', 'Feminino', 'Outro']],
            msg: 'Sexo deve ser Masculino, Feminino ou Outro',
          },
        },
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Data de nascimento não pode ser nula',
          },
          isDate: {
            args: true,
            msg: 'Data de nascimento deve ser uma data válida',
          },
        },
      },
      estado_civil: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Estado civil não pode ser nulo',
          },
          isIn: {
            args: [['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)']],
            msg: 'Estado civil deve ser Solteiro(a), Casado(a), Divorciado(a) ou Viúvo(a)',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'pessoas',
      hooks: {
        beforeValidate: (pessoa) => {
          if (pessoa.data_nascimento) {
            // Soma um dia a mais da data de nascimento
            pessoa.data_nascimento = new Date(pessoa.data_nascimento);
            pessoa.data_nascimento.setDate(pessoa.data_nascimento.getDate() + 1);
          }
        },
      },
    });
    return this;
  }
}
