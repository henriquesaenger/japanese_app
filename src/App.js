import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div className="App">
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
        </Switch>
        
      </div>
    </Router>
  );
}


