import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { TimeCapsuleFactory } from './timecapsule.js';

const User = UserFactory(sequelize);
const TimeCapsule = TimeCapsuleFactory(sequelize);

User.hasMany(TimeCapsule, {foreignKey: 'assignedUserId'});
TimeCapsule.belongsTo(User, {foreignKey: 'assignedUserId', as: 'assignedUser'})

export { User, TimeCapsule };