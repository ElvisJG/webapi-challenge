import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.actions.map(action => {
          return (
            <Link to={`/actions/${action.id}`} key={action.id}>
              <h3>{action.id}</h3>
              <h3>{action.description}</h3>
              <h3>{action.notes}</h3>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
