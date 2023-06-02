const Workout = require('../models/workout')

const workout_index = (req, res) => {
  Workout.find().then(result => {
    res.json(result);
  })
}

const workout_show = (req, res) => {

  Workout.findById(req.params.id).then(result =>
    {
      res.status(200).json(result);
    })
    .catch(err =>
      {
        res.status(404).json({error:
        "no such workout exists!"});
      })
}

const workout_create = async(req, res) => {
  const {title, reps, load} = req.body;
  try{
    const workout = await Workout.create({title, load , reps})
    res.status(200).json(workout)

  }
  catch(err)
  {
      res.status(400).json({error: error.message});
  }
}

const workout_delete = (req, res) => {
  const {id} = req.params;
  Workout.findOneAndDelete({_id: id}).then(()=>
  {
    res.status(200).json({msg: "Workout has been deleted!"});
  }).catch(err => {
    res.status(404).json({error: "no such record exists!"});
  })
}

const workout_update = (req, res) => {
  const {id} = req.params;
  Workout.findByIdAndUpdate(id, req.body).then(result => {
    res.status(202).json(result)
  } ).catch(err => {
    res.status(400).json({err: "no such workout exists!"});
  })
}

module.exports = {
  workout_index,
  workout_show,
  workout_create,
  workout_delete,
  workout_update
}
