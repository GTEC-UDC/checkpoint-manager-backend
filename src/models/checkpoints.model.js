// checkpoints-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const { isValidObjectId, ObjectId } = require("mongoose");

module.exports = function (app) {
  const modelName = 'checkpoints';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    tag: { type: String, required: true },
    x: {type: Number, required:true, default:0},
    y: {type: Number, required:true, default:0},
    floor: {type: String}
  }, {
    timestamps: false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
