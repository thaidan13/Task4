import React from 'react';

const ComponentB = ({ links }) => {
  return (
    <div>
      <h2>List of Links:</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentB;
