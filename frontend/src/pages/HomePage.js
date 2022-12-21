import React, { useEffect, useState } from 'react';
import ExerciseList from '../components/ExerciseList';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function HomePage( { setExerciseToEdit }) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            console.log('Working')
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.log('Fail')
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise )
        history.push('/edit')
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect(() => {
        loadExercises();
    }, []);

    return (
    <>
        <h2>List of Completed Exercises</h2>
        <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
        <Link to="/create">Create Exercise</Link>
    </>
    )

}


export default HomePage;