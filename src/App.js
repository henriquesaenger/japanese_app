import React, { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Cadastro from './pages/Cadastro';
import N5vocab from './pages/N5vocab';
import N4vocab from './pages/N4vocab';
import N3vocab from './pages/N3vocab';
import N2vocab from './pages/N2vocab';
import N1vocab from './pages/N1vocab';
import N5kanji from './pages/N5kanji';
import N4kanji from './pages/N4kanji';
import N3kanji from './pages/N3kanji';
import N2kanji from './pages/N2kanji';
import N1kanji from './pages/N1kanji';
import Login from './contexto/Info_login_Provider';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  

  return (
    <Router>
      <Login>
      <div className="App">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/cadastro"><Cadastro /></Route>
          <Route path="/N5-vocabulario"><N5vocab /></Route>
          <Route path="/N4-vocabulario"><N4vocab /></Route>
          <Route path="/N3-vocabulario"><N3vocab /></Route>
          <Route path="/N2-vocabulario"><N2vocab /></Route>
          <Route path="/N1-vocabulario"><N1vocab /></Route>
          <Route path="/N5-kanji"><N5kanji /></Route>
          <Route path="/N4-kanji"><N4kanji /></Route>
          <Route path="/N3-kanji"><N3kanji /></Route>
          <Route path="/N2-kanji"><N2kanji /></Route>
          <Route path="/N1-kanji"><N1kanji /></Route>

        </Switch>
        
      </div>
      </Login>
    </Router>
  );
}


