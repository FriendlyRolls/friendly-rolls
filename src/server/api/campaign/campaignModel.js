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

CampaignSchema.methods = {
  toJson: function() {
    var obj = this.toObject()
    delete obj.password;
    return obj;
  }
};

module.exports = mongoose.model('campaign', CampaignSchema);
