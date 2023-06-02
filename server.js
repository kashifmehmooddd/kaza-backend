const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3001
const workoutRoutes = require('../backend/routes/workout')


mongoose.connect('mongodb+srv://mehmoodkashif3054:BpRkLohcGiH8Kyix@cluster0.yirxn6h.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>
{

    console.log('connected to the database & listening on port', port);


}).catch(err=>
  {
    console.log(err);
})


app.use(express.json());


app.use('/api/workouts', workoutRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
