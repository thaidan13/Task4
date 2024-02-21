import React from 'react';

const ComponentC = ({ selectedLink }) => {
  return (
    <div>
      <h2>Selected Link:</h2>
      <iframe title="Selected Link" src={selectedLink} width="800" height="600"></iframe>
    </div>
  );
};

export default ComponentC;
