const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionID: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => {
      return new mongoose.Schema.Types.ObjectId();
    },
  },
  reactionBody: { type: String, required: true, maxlength: 280 },
  userName: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return timestamp;
    },
  },
});

module.exports = reactionSchema;
