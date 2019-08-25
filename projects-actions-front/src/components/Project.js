import React from 'react';

export default props => {
  const { name, description, status, id } = props;
  console.log('INSIDE PROJECT', props);
  return (
    <div>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <h5>{id}</h5>
    </div>
  );
};
