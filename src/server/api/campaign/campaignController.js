// campaign controller
//===========================================
var  Campaign = require('./campaignModel');
var _ = require('lodash');

exports.get = function(req, res, next) {
  Campaign.find({})
    .select('-campaignName')
    .exec()
    .then(function(campaigns){
      res.json(campaigns.map(function(campaign){
        return campaign.toJson();
      }));
    }, function(err){
      next(err);
    });
};
