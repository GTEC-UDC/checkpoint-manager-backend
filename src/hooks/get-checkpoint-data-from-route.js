const async = require('async');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// eslint-disable-next-line no-unused-vars

function getDataFromId(checkpointService) {

    return (aCheckpointId, callback ) => {

      checkpointService.get(aCheckpointId)
      .then(theCheckpoint => {
        return callback(null, theCheckpoint);
      })
      .catch(err=> {return callback(err);});
    };
};

module.exports = (options = {}) => {
  return async context => {

    const { data, app } = context;
    try {
      let result = await async.map(data.points, getDataFromId(app.service('checkpoints')));
      context.data.points = result;
      return context;
    } catch (err) {
      return context;
    }
  };
};
