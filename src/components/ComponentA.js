import React, { useState } from 'react';

const ComponentA = ({ onLinkSubmit }) => {
  const [link, setLink] = useState('');

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLinkSubmit(link);
    setLink('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={link} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComponentA;
