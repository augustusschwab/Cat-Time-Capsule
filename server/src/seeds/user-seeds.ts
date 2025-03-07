import {User} from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'CatLover', email: 'cat@lover.com', password: 'password' },
    { username: 'CatsAreCool', email: 'catsare@cool.com', password: 'password' },
    { username: 'AwesomeCats', email: 'awesome@cats.com', password: 'password' },
  ], { individualHooks: true });
};