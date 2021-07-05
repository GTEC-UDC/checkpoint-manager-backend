// routes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'routes';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const point = new Schema({ 
    tag: { type: String, required: true },
    x: {type: Number, required:true, default:0},
    y: {type: Number, required:true, default:0},
    floor: {type: String}
  });
  const schema = new Schema({
    tag: { type: String, required: true },
    points: {type: [point], required:true, default: []}
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
