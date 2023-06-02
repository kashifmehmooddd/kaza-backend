const express = require('express');
const workout = require('../models/workout');
const routes = express.Router();
const Workout = require('../models/workout');
const workoutsController = require('../controllers/workoutsController')

routes.get('/', workoutsController.workout_index);
routes.get('/:id', workoutsController.workout_show);
routes.delete('/:id', workoutsController.workout_delete);
routes.patch('/:id', workoutsController.workout_update);
routes.post('/', workoutsController.workout_create);

module.exports = routes;
