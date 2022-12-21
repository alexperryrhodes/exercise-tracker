import * as exercises from './model.mjs';
import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * Create a new exercise 
 */
 app.post('/exercises', (req, res) => {
     exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request Failed'})
        })
});


/* Retrieve exercises */
app.get('/exercises', (req, res) => {
    let filter = {}
    exercises.retrieveExercise(filter, '', 0)
        .then(exercises => {
            res.status(200).send(exercises)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request Failed'})
        })
});

/* Update the exercise */
app.put('/exercises/:_id', (req, res) => {
    exercises.updateExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date) 
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            }
            else {
                res.status(500).json({Error: 'Value Not Updated'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request Failed'})
        })
});

/* Delete the exercise */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercise(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send()
            }
            else {
                res.status(500).json({Error: 'Value Not Deleted'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request Failed'})
        })
        
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});