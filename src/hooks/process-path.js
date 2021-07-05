// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data } = context;

    if(!data.routeTag) {
      throw new Error('Parameter routeTag is missing.');
    }

    const { user } = context.params;

    context.data = {
      routeTag: data.routeTag,
      routeId: data.routeId,
      ownerEmail: user.email,
      ownerId: user._id,
      checkpoints: data.checkpoints
    };

    return context;
  };
};
