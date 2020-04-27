module.exports = {
  friendlyName: "Subscribe",

  description: "Subscribe realtime.",

  inputs: {
    name: { type: "string", required: true },
  },

  exits: {},

  fn: async function (inputs) {
    if (!this.req.isSocket) {
      return this.res.badRequest("This was not a socket connection.");
    }

    sails.sockets.join(this.req, user.id);

    sails.sockets.broadcast(user.id, "hello", `hey ${user.name}`);

    return;
  },
};
