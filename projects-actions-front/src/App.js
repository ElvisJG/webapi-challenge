import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Actions from './components/Actions';
import Projects from './components/Projects';
import Action from './components/Action';
import Project from './components/Project';

class App extends Component {
  state = {
    projects: [],
    actions: [],
    error: null,
    projectsURL: 'http://localhost:4000/api/projects/',
    actionsURL: 'http://localhost:4000/api/actions/'
  };

  async componentDidMount() {
    try {
      const projects = this.state.projectsURL;
      const getProjects = await Axios.get(projects);
      const actions = this.state.actionsURL;
      const getActions = await Axios.get(actions);
      this.setState({
        projects: getProjects.data,
        actions: getActions.data
      });
    } catch ({ message }) {
      this.setState({
        error: message
      });
    }
  }

  render() {
    console.log('PROJECTS', this.state.projects);
    console.log('ACTIONS', this.state.actions);
    const { actions, projects } = this.state;
    return (
      <div className='App'>
        <Nav />
        <h1>WEB API Sprint Stretch</h1>
        <Route
          exact
          path='/actions'
          render={() => <Actions actions={actions} />}
        />
        <Route
          exact
          path='/projects'
          render={() => <Projects projects={projects} />}
        />
        <Route exact path='/actions/:id' render={() => <Action />} />
        <Route exact path='/projects/:id' render={() => <Project />} />
      </div>
    );
  }
}

export default App;
