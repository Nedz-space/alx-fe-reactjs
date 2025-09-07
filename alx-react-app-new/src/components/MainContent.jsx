// src/components/MainContent.jsx
import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Profiles</h2>
      
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '30px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>

      <UserProfile name="Alice" age={25} bio="Loves traveling and exploring new cultures." />
      <UserProfile name="Bob" age={30} bio="Enjoys hiking, coding, and photography." />
      <UserProfile name="Charlie" age={28} bio="Passionate about food, art, and design." />
    </main>
  );
}

export default MainContent;
