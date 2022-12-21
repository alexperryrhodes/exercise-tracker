import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreatePage() {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully Added Exercise")
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`)
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Add Exercise</h1>

        
        <form>
            <fieldset>

            <label htmlFor="name">Exercise Name</label>
            <input
                id="name"
                type = "text"
                placeholder='Squat'
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            
            <label htmlFor="reps">Number of Reps</label>
            <input
                id="reps"
                type = "number"
                placeholder='10'
                value={reps}
                onChange={e => setReps(e.target.value)} 
            />
        
            <label htmlFor="weight">Weight</label>
            <input
                id='weight'
                type = "number"
                placeholder='35'
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
                placeholder="MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} 
            />
            
            <button 
                onClick={e => {
                    e.preventDefault();
                    createExercise();
                }}>Add</button>
        
        </fieldset>
        </form>
        </div>
    )

}

export default CreatePage;