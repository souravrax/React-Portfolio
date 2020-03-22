import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.pages';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route exact path="/projects" component={HomePage} />
          <Route exact path="/contact" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
