import './App.css';

// dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

// components
import Navigation from './components/Navigation';


function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
       <Router>
      
      
      <header className="App-header">
      <h1>Exercise Tracker</h1>
      <p>An Easy Way to Track Progress</p>
      </header>

      <Navigation/>
          
          <main>
            <Route path="/" exact><HomePage setExerciseToEdit={setExerciseToEdit}/></Route>
            <Route path="/create"><CreatePage/></Route>
            <Route path="/edit"><EditPage exerciseToEdit={exerciseToEdit}/></Route>
          </main>


      <footer>© 2022 Alexandra Rhodes</footer>

      </Router>
    </div>
  );
}

export default App;
