import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.projects.map(project => {
          return (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <h3>{project.id}</h3>
              <h3>{project.description}</h3>
              <h3>{project.notes}</h3>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
