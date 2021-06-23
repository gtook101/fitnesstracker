const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Exercise.create(body)
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/:id", ({ body }, res) => {
  Workout.insertMany(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Stats.find({})
    .sort({ date: -1 })
    .then((dbStats) => {
      res.json(dbStats);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
