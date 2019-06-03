import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage'
import Universities from './Pages/Universities'
import Students from './Pages/Students'
import UniversityDetails from './Pages/UniversityDetails'
function App() {
  return (

      
    <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/universities" component={Universities} />
      <Route path="/students" component={Students} />
      <Route path="/universities/:number" component={UniversityDetails} />
    </div>
</Router>
    
  );
}

export default App;
