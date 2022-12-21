import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditPage =  ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully Edited Exercise")
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`)
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Edit Exercise</h1>

        
        <form>
            <fieldset>

            <label htmlFor="name">Exercise Name</label>
            <input
                id="name"
                type = "text"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            
            <label htmlFor="reps">Number of Reps</label>
            <input
                id="reps"
                type = "number"
                value={reps}
                onChange={e => setReps(e.target.value)} 
            />
        
            <label htmlFor="weight">Weight</label>
            <input
                id='weight'
                type = "number"
                value={weight}
                onChange={e => setWeight(e.target.value)} 
            />
            
            <label htmlFor='unit'>Select Unit</label>
            <select
                value={unit}
                id="unit"
                name="unit"
                onChange={e => setUnit(e.target.value)}
            >
                <option selected value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>

            <label htmlFor="date">Exercise Date</label>
            <input
                id="date"
                type = "text"
                value={date}
                onChange={e => setDate(e.target.value)} 
            />
            
            <button 
                onClick={e => {
                    e.preventDefault();
                    editExercise();
                }}>Save</button>
        
        </fieldset>
        </form>
        </div>
    )

};

export default EditPage;