const { User } = require('./db.js');

async function setUser(){
  let users = [
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

  for(let us of users) {
    await User.findOrCreate({
      where: { email: us.email,password: us.password, isadmin: us.isadmin},
      defaults: users[us]
    })
  }
  console.log(users.length+" User Created to Test");
  //let newuser = await User.bulkCreate(users);
}

module.exports = async () => { await setUser()};
