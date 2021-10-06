// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data, app} = context;
    const { user } = context.params;

    data.ownerEmail = user.email;
    data.ownerId=user._id;

    return context;
  };
};
