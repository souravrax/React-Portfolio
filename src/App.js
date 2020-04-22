import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.pages';
import AboutPage from './pages/about/about.pages';
import ProjectsPage from './pages/projects/projects.pages';
import ContactPage from './pages/contact/contact.pages';

class App extends React.Component {
  componentWillMount = () => {
    console.log('%c ', 'font-size:400px; background:url(https://pics.me.me/codeit-google-until-youfinda-stackoverflow-answerwith-code-to-copy-paste-34126823.png) no-repeat;');
  }
  render() {
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
}

export default App;
