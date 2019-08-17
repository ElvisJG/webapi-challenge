import React from 'react';
import { Link } from 'react-router-dom';

import Project from './Project';

export default props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.projects.map(project => {
          return (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <Project
                name={project.name}
                description={project.description}
                status={project.completed}
                id={project.id}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
