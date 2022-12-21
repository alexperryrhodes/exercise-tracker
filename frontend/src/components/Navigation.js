import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navigation'>
            <ul>
                <li><Link className="App-link" to="/">Home</Link></li>
                <li><Link className="App-link" to="/create">Create</Link></li>
                {/* <li><Link className="App-link" to="/edit">Edit</Link></li> */}
            </ul>
        </div>
    );
}

export default Navigation;
