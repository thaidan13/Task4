import React from 'react';

const ComponentB = ({ links, onLinkClick }) => {
  return (
    <div className="component">
      <h2>Component B</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" onClick={() => onLinkClick(link)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentB;
