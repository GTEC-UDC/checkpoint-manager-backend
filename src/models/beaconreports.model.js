// beaconreports-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const { ObjectId } = require("mongoose");

module.exports = function (app) {
  const modelName = 'beaconreports';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;


  const beaconScan = new Schema({ 
    uuid: { type: String, required: true},
    major: {type: Number, required:true, default:0},
    minor: {type: Number, required:true, default:0},
    rssi: {type: Number, required:true, default:0},
    timestamp : {type:Number, required:true}
  });

  const schema = new Schema({
    ownerEmail: {type: String, required:true},
    ownerId: {type: ObjectId, required:true},
    scans: { type: [beaconScan], required: true, default:[]}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
