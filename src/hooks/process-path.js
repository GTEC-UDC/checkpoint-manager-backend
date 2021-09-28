const async = require('async');
// eslint-disable-next-line no-unused-vars

function getDataFromId(checkpointService) {

  return (aCheckpointWithTs, callback ) => {

    checkpointService.get(aCheckpointWithTs.id)
    .then(theCheckpoint => {
      theCheckpoint.timestamp = aCheckpointWithTs.timestamp;
      return callback(null, theCheckpoint);
    })
    .catch(err=> {return callback(err);});
  };
};

module.exports = (options = {}) => {
  return async context => {

    const { data, app} = context;

    if(!data.routeTag) {
      throw new Error('Parameter routeTag is missing.');
    }

    const { user } = context.params;

    context.data = {
      routeTag: data.routeTag,
      routeId: data.routeId,
      ownerEmail: user.email,
      ownerId: user._id
    };

    try {
      let result = await async.map(data.checkpoints, getDataFromId(app.service('checkpoints')));
      context.data.checkpoints = result;
      return context;
    } catch (err) {
      return context;
    }
  };
};
