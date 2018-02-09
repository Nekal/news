const User = require('../models/').user;

module.exports = {
  findUser(username, password) {
    return (
      User.findOne({
        where: {
          username,
          password
        }
      })
    );
  },
  create(username, email, password, role) {
    return (
      User.create({
        username, email, password, role
      })
    );
  },

  checkUser(id, role, userId) {
    if (role === 'admin' && id === Number(userId)) {
      return (
        User.findOne({
          where: { id, role }
        })
      );
    }
    return Promise.reject(new Error('...'));
  }
};
