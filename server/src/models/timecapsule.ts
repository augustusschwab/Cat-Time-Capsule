import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface TimeCapsuleAttributes {
    id: number;
    name: string;
    email: string;
    openDate: string;
    message: string;
    catUrl: string;
}

interface TimeCapsuleCreationAttributes extends Optional<TimeCapsuleAttributes, 'id'> {}

export class TimeCapsule extends Model<TimeCapsuleAttributes, TimeCapsuleCreationAttributes> implements TimeCapsuleAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public openDate!: string;
    public message!: string;
    public catUrl!: string;
}

export function TimeCapsuleFactory(sequelize: Sequelize): typeof TimeCapsule {
  TimeCapsule.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      openDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      catUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: 'time-capsule',
      sequelize,
    }
  );

  return TimeCapsule;
}