module.exports = {
  friendlyName: "Get all messages",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.

    return await Messages.find({});
  },
};
