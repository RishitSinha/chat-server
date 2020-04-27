module.exports = {
  friendlyName: "Send message",

  description: "",

  inputs: {
    content: {
      type: "string",
      required: true,
    },
    from: {
      type: "string",
      required: true,
    },
    to: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "number",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    const sentMessage = await Messages.create(inputs).fetch();

    sails.sockets.broadcast(
      [inputs.from, inputs.to],
      "NEW_MESSAGE",
      sentMessage
    );

    return sentMessage;
  },
};
