import React from 'react';
import { FiEdit, FiTrash } from "react-icons/fi";

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
        <td>{ exercise.name } </td>
        <td>{ exercise.reps } </td>
        <td>{ exercise.weight }</td>
        <td>{ exercise.unit }</td>
        <td>{ exercise.date }</td>
        <td><FiEdit onClick={() => onEdit(exercise)}/></td>
        <td><FiTrash onClick={() => onDelete(exercise._id)}/></td>
    </tr> 
    );
    
}

export default Exercise;