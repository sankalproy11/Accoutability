const mongoose = require("mongoose");
const { Schema } = mongoose;

const planSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    days: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0 && value.length <= 7;
        },
        message: "Days array must be between 1 and 7 days long.",
      },
    },
    timeSlots: [{ type: Schema.Types.ObjectId, ref: "TimeSlot" }],
  },
  {
    timestamps: true,
  }
);

planSchema.index({ user: 1, days: 1 }, { unique: true });

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
