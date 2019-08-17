import React from 'react';

export default props => {
  const { description, notes, status, id, project_id } = props;
  console.log('INSIDE ACTION', props);
  return (
    <div>
      <h3>{description}</h3>
      <h3>{notes}</h3>
      <h5>{project_id}</h5>
    </div>
  );
};
