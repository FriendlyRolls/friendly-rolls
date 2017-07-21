// seeding MongoDB
//===========================================
var User = require('../api/user/userModel');
var Campaign = require('../api/campaign/campaignModel');
var _ = require('lodash');
var logBot = require('./logBot');

logBot.log('Initializing MongoDB seeds');

var users = [
  {username: 'Abtin', password: 'DMaster', usertype: 'DM'},
  {username: 'AG', password: 'Algae', usertype: 'Hero'},
  {username: 'Falko', password: 'Falkie', usertype: 'DM'},
  {username: 'Max', password: 'Maximus', usertype: 'Hero'},
];

var campaigns = [
  {campaignName: 'A tale of time'},
  {campaignName: 'The Dragon\'s Keep'},
  {campaignName: 'The Dark Winter'},
  {campaignName: 'The fall of the 7 kingdoms'},
  {campaignName: 'The Necromancer'},
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
  var cleanPromises = [User, Campaign]
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
      return ['Seeded the DB with 4 Users', 'Created 5 campaigns'];
    });
};

// create users
var createCampaigns = function(data) {
  var promises = campaigns.map(function(campaign) {
    return createDoc(Campaign, campaign);
  });

  return Promise.all(promises)
    .then(function(campaigns) {
      return _.merge({campaigns: campaigns}, data || {});
    })
    .then(function() {
      return ['Seeded the DB with 4 Users', 'Created 5 campaigns'];
    });
};

// set db with users
setDB()
  .then(createUsers)
  .then(createCampaigns)
  .then(logBot.log.bind(logBot))
  .catch(logBot.log.bind(logBot));
