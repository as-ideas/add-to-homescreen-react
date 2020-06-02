import React from 'react';
import AddToHomeScreen from '../../src/AddToHomeScreen';

export default function App() {

  return (
      <div>
        <header>
          <h1>Add-to-Homescreen React Example</h1>
        </header>
        <main>
          <p>React demo application for basic integration of Add-to-Homescreen React component into a React application.</p>
        </main>
        <footer>
          <p>2020, Ideas Engineering GmbH.</p>
        </footer>
        <AddToHomeScreen
            data-test='add-to-homescreen'
            appId='Add-to-Homescreen Basic Integration Example'
            lifespan={ 15 }
            startDelay={ 0 }
            startAutomatically={ true }
            skipFirstVisit={ false }
            minSessions={ 0 }
            displayPace={ 0 }
            customPromptContent={ {
              title: 'Add-to-Homescreen Basic Integration Example',
              cancelMsg: '',
              installMsg: 'Add to Home Screen',
              guidanceCancelMsg: '',
              src: 'images/logos/default/StoreLogo.png'
            } }
            customPromptPlatformDependencies={ {
              chromium: {
                images: [
                  {
                    src: 'images/guidance/chromium.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              edge: {
                images: [
                  {
                    src: 'images/guidance/chromium.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              iphone: {
                images: [
                  {
                    src: 'images/guidance/iphone.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              ipad: {
                images: [
                  {
                    src: 'images/guidance/ipad.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              firefox: {
                images: [
                  {
                    src: 'images/guidance/firefox.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              samsung: {
                images: [
                  {
                    src: 'images/guidance/firefox.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              opera: {
                images: [
                  {
                    src: 'images/guidance/opera.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              }
            } }
            showClasses={ [
              'animated',
              'd-grid'
            ] }
            showClass='d-grid'
            // activate this to get logs
            activateLogging={ false }
        />
      </div>
  );
}
