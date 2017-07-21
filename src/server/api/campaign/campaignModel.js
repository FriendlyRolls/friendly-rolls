// campaign model
//===========================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  campaignName: {
    type: String,
    required: true,
    unique: true
  },
});

module.exports = mongoose.model('campaign', CampaignSchema);
