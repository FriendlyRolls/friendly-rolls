// seeding MongoDB
//==========================================

// import users
var User = require('../api/user/userModel');
var _ = require('lodash');
var logBot = require('./logBot');

logBot.log('Initializing MongoDB seeds');

var users = [
  {username: 'Abtin', password: 'DMaster'},
  {username: 'AG', password: 'Algae'},
  {username: 'Falko', password: 'Falkie'},
  {username: 'Max', password: 'Maximus'},
];

// creating document
var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

// set database
var setDB = function() {
  logBot.log('Setting up the DB');
  var cleanPromises = [User]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
}

// create users
var createUsers = function(data) {
  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    })
    .then(function() {
      return 'Seeded the DB with 4 Users';
    });
};

setDB()
  .then(createUsers)
  .then(logBot.log.bind(logBot))
  .catch(logBot.log.bind(logBot));
