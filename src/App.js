import React, { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null);

  const addLink = (link) => {
    if (isValidLink(link)) {
      setLinks([link, ...links]);
    } else {
      alert('Liên kết không hợp lệ! Vui lòng nhập liên kết từ Youtube, TikTok hoặc Instagram.');
    }
  };

  const isValidLink = (link) => {
    return link.includes('youtube.com') || link.includes('tiktok.com') || link.includes('instagram.com');
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="app">
      <h1>Task 4</h1>
      <div className="container">
        <ComponentA addLink={addLink} />
        <ComponentB links={links} onLinkClick={handleLinkClick} />
        <ComponentC selectedLink={selectedLink} />

      </div>
    </div>
  );
}

export default App;
