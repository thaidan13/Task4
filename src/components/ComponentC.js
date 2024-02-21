import React from 'react';

const ComponentC = ({ selectedLink }) => {
  return (
    <div>
      <h2>Selected Video:</h2>
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
  );
};

export default ComponentC;
