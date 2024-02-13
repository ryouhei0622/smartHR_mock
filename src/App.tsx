import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Home bg-base-gray">
      <header className="h-header-height bg-base-blue mb-header-margin">
        SmartHR 燈株式会社
      </header>
      <div className="flex w-4/5 h-screen mx-auto space-x-header-margin">
      <div className="w-2/5 h-4/5 mx-header-margin bg-base-blue">
        <h1>今日も一日がんばるぞい！</h1>
      </div>
      <div className="w-3/5 h-full bg-base-blue">
        <h1>今日も一日がんばるぞい！</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
