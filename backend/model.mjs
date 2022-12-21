// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb+srv://rhodeale:v76gBiNV5QvlPY58@cs290.rsr3i.mongodb.net/exercises_db?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

// Define schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true, default: 'lbs' },
    date: { type: String, required: true }
});

// Create model
const Exercise = mongoose.model("Exercise", exerciseSchema);


// Define create Exercise function 
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise ({name: name, reps: reps, weight: weight, unit: unit, date:date});
    return exercise.save();
}

// Define retrieve Exercise function 
const retrieveExercise = async (filter, projection, limit) => {
    const query = Exercise.find(filter).select(projection).limit(limit);
    return query.exec();
}

// Define update Exercise function 
const updateExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({ _id: _id },
        { name: name, reps: reps, weight: weight, unit:unit, date:date });
    return result.modifiedCount;
}

// Define update Exercise function 
const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
}

export { createExercise, retrieveExercise, updateExercise, deleteExercise };