import { TimeCapsule } from '../models/timecapsule.js';

export const seedTimeCapsules = async () => {
  await TimeCapsule.bulkCreate([
    { name: 'Tommy John', email: 'tommyj@msn.com', openDate: '11-27-2025', message: `Don't you love kittens!`, catUrl:'https://cataas.com/cat/0TnOAMpokjANBFVk?position=center', assignedUserId: 1 },
    { name: 'Sonya Pearl', email: 'sonya34@gmail.com', openDate: '09-15-2027', message: `Have a great day!`, catUrl:'https://cataas.com/cat/ehkkLGlVZdCznVHa?position=center', assignedUserId: 1 },
    { name: 'Lony Sunshine', email: 'lonytheshredder@aol.com', openDate: '06-07-2025', message: `Will you buy me a cat?`, catUrl:'https://cataas.com/cat/sNsEbVEdpmhZrhST?position=center', assignedUserId: 2 },
  ], { individualHooks: true });
};