import React from 'react';
import { Route, Switch } from "react-router-dom";

import MainPage from './components/MainPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectsRouter from './components/ProjectsRouter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:project_name" component={ProjectsRouter} />
      </Switch>
    </div>
  );
}

export default App;
