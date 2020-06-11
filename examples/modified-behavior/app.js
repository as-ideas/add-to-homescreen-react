import React from 'react';
import AddToHomeScreen from '../../src/AddToHomeScreen';

export default function App() {

  return (
      <div>
        <header>
          <h1>Add-to-homescreen React Modified Behavior Example</h1>
        </header>
        <main>
          <p>React demo application for integration of Add-to-Homescreen React component with modified behavior into a React application.</p>
        </main>
        <footer>
          <p>2020, <a href="https://www.ideas-engineering.io/" target="_blank">Ideas Engineering GmbH.</a></p>
        </footer>
        <AddToHomeScreen
            appId='Add-to-Homescreen React Modified Behavior Example'
            startAutomatically={ true }
            startDelay={ 0 }
            lifespan={ 30 }
            skipFirstVisit={ true }
            displayPace={ 0 }
            customPromptContent={ {
              title: 'Do you want to install Add-to-homescreen React Modified Behavior Example on your homescreen?',
              cancelMsg: 'No',
              installMsg: 'Yes, sure!',
              guidanceCancelMsg: 'Dismiss',
              src: 'images/ExampleLogo.png'
            } }
        />
      </div>
  );
}
