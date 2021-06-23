const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of exercise",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter duration of exercise",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter the amount of weight",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter number of reps",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter number of sets",
      },
      distance: {
        type: Number,
        required: "Enter the distance",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
