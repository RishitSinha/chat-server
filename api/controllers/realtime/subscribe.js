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

    sails.sockets.join(this.req, inputs.name);

    sails.sockets.broadcast(inputs.name, "hello", `hey ${inputs.name}`);

    return;
  },
};
