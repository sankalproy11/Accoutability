const mongoose = require("mongoose");

const { Schema } = mongoose;

const timeSlotSchema = new Schema(
  {
    plan: { type: Schema.Types.ObjectId, ref: "Plan", required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    signInTime: { type: Date },
    signOutTime: { type: Date },
    actualDuration: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = TimeSlot;
