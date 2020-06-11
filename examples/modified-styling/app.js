import React from 'react';
import AddToHomeScreen from '../../src/AddToHomeScreen';
import './modifiedStyling.scss';

export default function App() {

  return (
      <div>
        <header>
          <h1>Add-to-homescreen React Modified Styling Example</h1>
        </header>
        <main>
          <p>React demo application for integration of Add-to-Homescreen React component with modified styling.</p>
        </main>
        <footer>
          <p>2020, <a href="https://www.ideas-engineering.io/" target="_blank">Ideas Engineering GmbH.</a></p>
        </footer>
        <AddToHomeScreen
            appId='Add-to-Homescreen React Modified Styling Example'
            customPromptContent={ {
              cancelMsg: '',
              installMsg: 'Install',
              guidanceCancelMsg: ''
            } }
            customPromptElements={ {
              container: 'athContainer',
              containerAddOns: '',
              banner: 'athBanner',
              logoCell: 'athLogoCell',
              logoCellAddOns: 'athContentCell',
              logo: 'athLogo',
              titleCell: 'athTitleCell',
              titleCellAddOns: 'athContentCell',
              title: 'athTitle',
              cancelButtonCell: 'athCancelButtonCell',
              cancelButtonCellAddOns: 'athButtonCell',
              cancelButton: 'athCancelButton',
              installButtonCell: 'athInstallButtonCell',
              installButtonCellAddOns: 'athButtonCell',
              installButton: 'athInstallButton',
              installButtonAddOns: 'button',
              guidance: 'athGuidance',
              guidanceImageCell: 'athGuidanceImageCell',
              guidanceImageCellAddOns: '',
              guidanceCancelButton: 'athGuidanceCancelButton'
            } }
        />
      </div>
  );
}
