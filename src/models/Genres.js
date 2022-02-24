const { Schema, model } = require("mongoose");

const genresSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true }
  },
  {
    timestamps: true,
    versionKey: false, 
  }
);

module.exports = model("genres", genresSchema);