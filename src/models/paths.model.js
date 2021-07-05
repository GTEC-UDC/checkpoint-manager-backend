// paths-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html

const { isValidObjectId, ObjectId } = require("mongoose");

// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'paths';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const checkpoint = new Schema({ 
    tag: { type: String, required: true},
    x: {type: Number, required:true, default:0},
    y: {type: Number, required:true, default:0},
    floor: {type: String},
    timestamp : {type:Number, required:true}
  });
 
  const schema = new Schema({
    ownerEmail: {type: String, required:true},
    ownerId: {type: ObjectId, required:true},
    routeId: {type: ObjectId, required:true},
    routeTag:  {type: String, required:true},
    checkpoints: { type: [checkpoint], required: true, default:[]}
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
