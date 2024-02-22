import React from 'react';

const ComponentC = ({ selectedLink }) => {
  return (
    <div className="component">
      <h2>Component C</h2>
      {selectedLink && (
        <div className="iframe-container">
          <iframe 
          title="Selected Video" 
          width="800" 
          height="600" 
          src={selectedLink} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
      ></iframe>
        </div>
      )}
    </div>
  );
};

export default ComponentC;
