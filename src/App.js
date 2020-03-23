import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.pages';
import AboutPage from './pages/about/about.pages';
import ProjectsPage from './pages/projects/projects.pages';
import ContactPage from './pages/contact/contact.pages';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
