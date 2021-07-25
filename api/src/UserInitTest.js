const { User } = require('./db.js');

async function setUser(){
  let user = [
    {
      email: 'admin@admin.com',
      password: '$2b$10$KVoI0V12wOwuWd8lcjSGR.sYVEL/SZtE6cqPHh7xjJkBc0V34jfpC', //zR$yuWa!BnNX
      isadmin: true,
    },
    {
      email: 'test@gmail.com',
      password: 'test',
      isadmin: false,
    },
    {
      email: 'test1@gmail.com',
      password: 'test',
      isadmin: true,
    },
    {
      email: 'test2@gmail.com',
      password: 'test',
      isadmin: false,

    },
    {
      email: 'test3@gmail.com',
      password: 'test',
      isadmin: false,
    }

  ]

  let newuser = await User.bulkCreate(user);
  console.log(newuser.length+" User Created to Test");
}

module.exports = async () => { await setUser()};
