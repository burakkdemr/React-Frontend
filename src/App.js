import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Universities from "./Pages/Universities";
import Students from "./Pages/Students";
import UniversityDetails from "./Pages/UniversityDetails";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/universities" component={Universities} />
        <Route
          path="/universitydetails/:universityId"
          component={UniversityDetails}
        />
        <Route path="/students/" component={Students} />
      </div>
    </Router>
  );
}

export default App;
