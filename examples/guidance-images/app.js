import React from 'react';
import AddToHomeScreen from '../../src/AddToHomeScreen';

export default function App() {

  return (
      <div>
        <header>
          <h1>Add-to-homescreen React Customized Guidance Images Example</h1>
        </header>
        <main>
          <p>React demo application for integration of Add-to-Homescreen React component with customized guidance images into a React application.</p>
        </main>
        <footer>
          <p>2020, <a href="https://www.ideas-engineering.io/" target="_blank">Ideas Engineering GmbH.</a></p>
        </footer>
        <AddToHomeScreen
            appId='Add-to-Homescreen React Customized Guidance Images Example'
            customPromptPlatformDependencies={ {
              chromium: {
                images: [
                  {
                    src: 'images/guidance/chromium-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              edge: {
                images: [
                  {
                    src: 'images/guidance/chromium-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              iphone: {
                images: [
                  {
                    src: 'images/guidance/iphone-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              ipad: {
                images: [
                  {
                    src: 'images/guidance/ipad-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              firefox: {
                images: [
                  {
                    src: 'images/guidance/firefox-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              samsung: {
                images: [
                  {
                    src: 'images/guidance/firefox-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              },
              opera: {
                images: [
                  {
                    src: 'images/guidance/opera-example.png',
                    alt: 'Guide to install application on home screen.'
                  }
                ]
              }
            } }
        />
      </div>
  );
}
