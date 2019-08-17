import React from 'react';
import { Link } from 'react-router-dom';

import Action from './Action';

export default props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.actions.map(action => {
          return (
            <Link to={`/actions/${action.id}`} key={action.id}>
              <Action
                description={action.description}
                notes={action.notes}
                status={action.completed}
                id={action.id}
                project_id={action.project_id}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
