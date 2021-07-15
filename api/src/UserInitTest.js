const { User } = require('./db.js');
// const axios = require('axios');

async function setUser(){
  let user = [
    {
      email: 'test@gmail.com',
      password: 'test',
      isadmin: true,
    },
    {
      email: 'test1@gmail.com',
      password: 'test',
      isadmin: false,
    },
    {
      email: 'test2@gmail.com',
      password: 'test',
      isadmin: true,

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
