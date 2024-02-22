import React, { useState } from 'react';

const ComponentA = ({ addLink }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLink(inputValue);
    setInputValue('');
  };

  return (
    <div className="component">
      <h2>Component A</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Thêm Liên Kết</button>
      </form>
    </div>
  );
};

export default ComponentA;
