const { Schema, model } = require("mongoose");

const videogameSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    released: { type: String, required: true },
    image: { type: String },
    rating: { type: Number, require: true },
    platforms: { type: Array, require: true },
    genres: { type: Array, require: true },
  },
  {
    timestamps: true,
    versionKey: false, // Quita al momento de crear un documento __v: 0
  }
);

module.exports = model("videogame", videogameSchema);