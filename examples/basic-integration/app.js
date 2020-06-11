import React from 'react';
import AddToHomeScreen from '../../src/AddToHomeScreen';

export default function App() {

  return (
      <div>
        <header>
          <h1>Add-to-Homescreen React Basic Integration Example</h1>
        </header>
        <main>
          <p>React demo application for basic integration of Add-to-Homescreen React component into a React application.</p>
        </main>
        <footer>
          <p>2020, <a href="https://www.ideas-engineering.io/" target="_blank">Ideas Engineering GmbH.</a></p>
        </footer>
        <AddToHomeScreen
            appId='Add-to-Homescreen React Basic Integration Example'
        />
      </div>
  );
}
