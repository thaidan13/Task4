import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const App = () => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkSubmit = (link) => {
    // Kiểm tra tính hợp lệ của liên kết và chỉ cho phép từ các MXH được chỉ định
    if (link.includes('youtube') || link.includes('tiktok') || link.includes('instagram')) {
      setLinks([link, ...links]);
    } else {
      alert('Invalid link. Please input a link from Youtube, Tiktok, or Instagram.');
    }
  };

  const handleLinkSelect = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <ComponentA onLinkSubmit={handleLinkSubmit} />
      <ComponentB links={links} onLinkSelect={handleLinkSelect} />
      <ComponentC selectedLink={selectedLink} />
    </div>
  );
};

export default App;
