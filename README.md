# add-to-homescreen-react
[![Latest Release](https://img.shields.io/github/release/as-ideas/add-to-homescreen-react.svg)](https://github.com/as-ideas/add-to-homescreen-react) 
[![npm version](https://img.shields.io/npm/v/@ideasio/add-to-homescreen-react.svg)](https://www.npmjs.com/package/@ideasio/add-to-homescreen-react)
[![Actions Status](https://github.com/as-ideas/add-to-homescreen-react/workflows/Node%20CI/badge.svg)](https://github.com/as-ideas/add-to-homescreen-react/actions)
[![LGPLv3 license](https://img.shields.io/badge/License-LGPLv3-blue.svg)](http://www.gnu.de/documents/lgpl-3.0.de.html)

A React component providing add-to-home-screen functionality for progressive webapps on different platforms and browsers.
# Table of Contents
1. [What is it](#what-is-it)
2. [Usage](#usage)
3. [Configuration](#configuration-for-the-add-to-home-screen-module)
4. [Custom Prompt Content](#custom-prompt-content)
5. [Browser specific prompt dialog](#browser-specific-prompt-dialog-configuration)
6. [Customizing add-to-homescreen prompt](#customizing-add-to-homescreen-prompt)
7. [Examples](#examples)
8. [Live Demo](#live-demo)
9. [Licence](#licence)

## What is it?

`add-to-homescreen-react` allows you to easily inform your user that your React application is a PWA and installable on the home screen of your mobile phone or on your desktop. It provides a
highly configurable React component named `AddToHomeScreen` that supports different browsers and platforms. Where possible, browser's native add-to-homescreen functionality is used.
Where not, a guidance for the user is shown.

This library is based on the [`add-to-homescreen`](https://github.com/docluv/add-to-homescreen) project of [Chris Love](https://github.com/docluv).

## Usage

First import the component:

```
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';
```

Then add the component to your app:

```
<AddToHomeScreen />
```

This is the simplest way to use this component. There is a wide range of configuration options available you can use to customize the behaviour and design of the component.
See section [Configuration for the Add-to-home-screen module](#configuration-for-the-add-to-home-screen-module) for a description of all available configuration parameters.

## Configuration for the Add-to-home-screen module

Configuration is defined in the `addToHomeScreenConfiguration.json` file. The following parameters exist and can be customized:

| **Configuration parameter** | **Description** | **Default Setting** |
|---|---|---|
| appId | The id of the application. It is used as key for the local storage entry. It is recommended to define it specifically for your application. | `add-to-homescreen-react` |
| debug | Indicates the platform that should be simulated for debugging purposes. Overrides browser checks. See section [Browser specific prompt dialog configuration](#browser-specific-prompt-dialog-configuration) for the list of supported platform keys. | `false` |
| activateLogging | Activate logging to JS console for the module. Defaults to `true` when `debug` is not `false`. | `false` | 
| startAutomatically | Show the message automatically. | `true` |
| skipFirstVisit | Show message only to returning visitors (i.e. skip the first time the user visits). | `false` |
| minPageViews | Show message only after minimum number of page views. | `0` |
| startDelay | Show the message after that many seconds from page load. | `1` |
| lifespan | Show the message for that many seconds. | `15` |
| displayPace | Minutes before the message is shown again (`0`: display every time). | `1440` (= 24 hours) |
| mustShowCustomPrompt | Show custom prompt for browsers with native add-to-home-screen support too. | `false` |
| maxDisplayCount | Absolute maximum number of times the message will be shown to the user (`0`: no limit). | `0` | 
| validLocation | List of pages where the message will be shown (array of regular expressions). | `[]` | 
| onInit | A function being executed on initialization of the module. | `null` | 
| onShow | A function being executed when the message is shown. | `null` | 
| onAdd | A function being executed when the application is launched the first time from the home screen (guesstimate). | `null` | 
| onInstall | A function being executed when 'Install' button has been clicked. | `null` |
| onCancel | A function being executed when 'Cancel' button has been clicked. | `null` |
| showClasses | CSS classes to be added for all supported browsers and platforms to the HTML element specified by the `ath-container` CSS class (see section [Customizing add-to-homescreen prompt](#customizing-add-to-homescreen-prompt) for details) | `['animated', 'd-grid']` |
| showClass | CSS class that ensures that an element is shown. At least, it must define the `display` CSS property. | `d-grid` |
| hideClass | CSS class that ensures that an element is hidden. At least, it must define the `display` CSS property and set it to `hide`. | `d-none` |
| customCriteria | A hook to provide either a custom method or a simple `true` (= always) or `false` (= never) value to control when it prompts. | `null` (the same as `true`)|
| customPromptContent | Allows customization of the custom prompt dialog's content. See section [Custom Prompt Content](#custom-prompt-content). | `{}` |
| customPromptElements | Allows definition of your own CSS class for all HTML elements of the custom prompt dialog. See section [Customizing add-to-homescreen prompt](#customizing-add-to-homescreen-prompt). | |
| customPromptPlatformDependencies | See section [Browser specific prompt dialog configuration](#browser-specific-prompt-dialog-configuration). | |

## Custom Prompt Content

The custom prompt is a dialog shown by the Add-to-Homescreen component if the browser does not support a native dialog or this native dialog is not available yet because there was
no user interaction (user gesture) yet when the component is invoked.

The `customPromptContent` configuration parameter allows to globally define (for all platforms) the content of the custom prompt dialog. It contains the following customizable parameters:

| **Configuration parameter** | **Description** | **Default Setting** |
|---|---|---|
| title | The title of the prompt dialog. | `Install application?` |
| src | The URL for the logo shown in the prompt dialog. If it is `null` no logo is shown in the dialog. | `null` |
| cancelMsg | The text of the prompt dialog's cancel button. | `Not Now` |
| installMsg | The text of the prompt dialog's install button. | `Install` |
| guidanceCancelMsg | The text of the guidance dialog's cancel button. | `Close` |

Please note that the messages can be defined per platform too. See section [Browser specific prompt dialog configuration](#browser-specific-prompt-dialog-configuration) to learn how.

## Browser specific prompt dialog configuration 

Some platforms support a native add-to-home-screen dialog, others not. For the second ones the add-to-home-screen custom dialog shows a guide (one or more images) that illustrates
how the app can be added to the home screen. The `customPromptPlatformDependencies` parameter allows to customize this guide. It contains a configuration entry for each of the supported
platforms. The following platforms are supported:

| **Platform** | **Key** |
|---|---|
| Native | `native` |
| Edge Browser | `edge` |
| Chromium-based Browsers | `chromium` |
| iPhone | `iphone` |
| iPad | `ipad` |
| Firefox Browser (Android only) | `firefox` |
| Samsung Phones | `samsung` |
| Opera Browser | `opera` |

The configuration entries for each platform contain the following customizable parameters:

| **Configuration parameter** | **Description** |
|---|---|
| targetUrl | The URL to a page with full instructions. Can be undefined. If it is defined the current page is replace by the page this URL points to. |
| showClasses | CSS classes to be added to the HTML element specified by the `ath-container` CSS class (see section [Customizing add-to-homescreen prompt](#customizing-add-to-homescreen-prompt) for details). |
| images | An array of image definitions. These images represent the installation guide for the user and are shown as soon as the user clicks the install button of the custom prompt dialog. |
| action | A set of platform-specific button labels for the prompt and guidance dialog. |

An image definition consists of the following configuration parameters: 

| **Configuration parameter** | **Description** |
|---|---|
| src | The URL to the image. |
| alt | The alternative text for the image. |

The action message definition consists of the following configuration parameters:

| **Configuration parameter** | **Description** |
|---|---|
| ok | The label for the prompt dialog's install button. |
| cancel | The label for the prompt dialog's cancel button. |
| guidanceCancel | The label for the guidance dialog's cancel button. |

Here is an example for a complete platform entry:

```
"iphone": {
  targetUrl: undefined,
  showClasses: ["iphone-wrapper", "animated", "fadeIn", "d-block"],
  images: [
    {
      src: "/images/addToHomeScreen/iphone.png",
      alt: "Tap the Share Icon and select Add to home screen entry"
    }
  ],
  action: {
    ok: "Ok",
    cancel: "Cancel",
    guidanceCancel: "Dismiss"
  }
}
```

See the file [Browser specific prompt dialog configuration](src/addToHomeScreenConfiguration.json) for default definition of `customPromptPlatformDependencies`.

## Customizing add-to-homescreen prompt

Per default, the `AddToHomeScreen` component brings a default styling based on a predefined set of CSS classes. You can change this styling by defining your own CSS rules for these
classes. If you need more changes or want a complete redesign of the custom prompt dialog, it may be helpful to define a complete new CSS rule set based on your own CSS classes.
The `customPromptElements` configuration parameter allows you to define CSS classes for all HTML elements of the add-to-homescreen custom prompt. It consists of a set of
configuration parameters defining these classes. For a better understanding of these parameters, here is the HTML structure of the custom prompt dialog:

```
<div class="{container}">
    <div class="{banner}">
      <div class="{logoCell}>
        <img class="{logo}"/>
      </div>
      <div class="{titleCell}">
        <div class="{title}"/>
      </div>
      <div class="{cancelButtonCell}">
        <button class="{cancelButton}"/>
      </div>
      <div class="{installButtonCell}">
        <button class="{installButton}"/>
      </div>
    </div>
    <div class="{guidance}">
      <div class="{guidanceImageCell}"/>
      <div class="{cancelButtonCell}">
        <button class="{guidanceCancelButton}"/>
      </div>
    </div>
</div>
```

The values in brackets (`{}`) are the configuration keys you can use within the `customPromptElements` parameter to define or change the CSS classes. The following table
describes these keys and their default value. 

| **Key** | **Description** | **Default CSS class** |
|---|---|---|
| container | The `<div>` element wrapping the whole prompt dialog. | `ath-container` |
| banner | The `<div>` element that defines the prompt dialog. If it is shown the guidance dialog is hidden. | `ath-banner` |
| logoCell | The cell element that wraps the logo of the prompt dialog. | `ath-logo-cell` |
| logo | The image tag for the logo (if there is one provided by the configuration) has this CSS class. | `ath-prompt-logo` |
| titleCell | The cell element that wraps the banner text of the prompt dialog. | `ath-title-cell` |
| title | The `<div>` element containing the banner text. | `ath-banner-title` |
| cancelButtonCell | The cell element that wraps the 'Cancel' button of the prompt and the guidance dialog. | `ath-cancel-cell` |
| cancelButton | The `<button>` element for the 'Cancel' button of the prompt dialog has this CSS class. | `btn-cancel` |
| installButtonCell | The cell element that wraps the 'Install' button of the prompt dialog. | `ath-install-cell` |
| installButton | The `<button>` element for the 'Install' button of the prompt dialog has this CSS class. | `btn-install` |
| guidance | The `<div>` element that defines the guidance dialog. If it is shown the prompt dialog is hidden. | `ath-guidance` |
| guidanceImageCell | The cell element that wraps the guidance image(s). The images are added to this cell dynamically from configuration. | `ath-guidance-image-cell` |
| guidanceCancelButton | The `<button>` element for the 'Cancel' button of the guidance dialog has this CSS class. | `btn-guidance-cancel` |

Please note, that each of these keys accepts only one CSS class. This is necessary to enable the `AddToHomeScreen` component to use this CSS class as accessor to the corresponding
HTML element. For your CSS ruleset you can add further CSS classes to the elements by the corresponding AddOns-keys that exist for each of the CSS class key in the table above.
Here is an overview of these AddOns-Keys and their default values:
 
| **Key** | **Default value** |
|---|---|
| containerAddOns | `banner-bottom-center` |
| bannerAddOns | '' |
| logoCellAddOns | `ath-banner-cell` |
| logoAddOns | '' |
| titleCellAddOns | `ath-banner-cell` |
| titleAddOns | '' |
| cancelButtonCellAddOns | `ath-banner-cell` |
| cancelButtonAddOns | `btn btn-link` |
| installButtonCellAddOns | `ath-banner-cell` |
| installButtonAddOns | `btn btn-success` |
| guidanceAddOns | '' |
| guidanceImageCellAddOns | `ath-banner-cell` |
| guidanceCancelButtonAddOns | `btn btn-link` |

There is another configuration key named `showClasses` that can be used to define CSS classes that are added dynamically to the prompt dialog wrapper (the container) whenever it is
shown. This can be done globally (see section [Configuration for the Add-to-home-screen module](#configuration-for-the-add-to-home-screen-module)) or per supported browser or
platform (see section [Browser specific prompt dialog configuration](#browser-specific-prompt-dialog-configuration)).

## Examples

In the `examples` directory you can find some examples of how to integrate the Add-to-Homescreen React component into a React application.
The following examples are available:

| **Example** | **Description** |
|---|---|
| [`basic-integration`](#example-basic-integration) | Demonstrates the simplest way to integrate the Add-to-Homescreen React component. |
| [`guidance-images`](#example-guidance-images) | Demonstrates the integration of the Add-to-Homescreen React component with customized guidance images for browser platforms not supporting native add-to-homescreen dialogs. | 
| [`modified-behavior`](#example-modified-behavior) | Demonstrates the integration of the Add-to-Homescreen React component with modification of its behavior. | 
| [`modified-styling`](#example-modified-styling) | Demonstrates the integration of the Add-to-Homescreen React component with modification of its styling. | 

### Example `basic-integration`

#### Where to find
This example can be found within directory `examples/basic-integration`.

#### Build & Run
Build is done by command `npm run build:example-basic-integration`. Compiled example is then available within directory `example/basic-integration/dist`.

Run the example locally with command `npm run start:example-basic-integration`. It is then available under [http://localhost:8081](http://localhost:8081). 

#### Description
This example demonstrates the simplest way to integrate the Add-to-Homescreen React component. It creates a simple React application with an `App` component (see the `app.js` file)
that integrates the Add-to-Homescreen React component by importing and adding it simply with its tag.

Without any configuration parameters (props) the Add-to-Homescreen React component works with its default configuration. It is shown automatically on first invocation of the
application for a limited time. After that it is shown again after one day. See section [Configuration](#configuration-for-the-add-to-home-screen-module) for details about the
default configuration.

### Example `guidance-images`

#### Where to find
This example can be found within directory `examples/guidance-images`.

#### Build & Run
Build is done by command `npm run build:example-guidance-images`. Compiled example is then available within directory `example/guidance-images/dist`.

Run the example locally with command `npm run start:example-guidance-images`. It is then available under [http://localhost:8082](http://localhost:8082). 

#### Description
This example demonstrates the integration of the Add-to-Homescreen React component with customized guidance images for browsers that don't support 
native add-to-homescreen dialogs. It creates a simple React application with an `App` component (see the `app.js` file) that
integrates the Add-to-Homescreen React component by importing and adding it with its tag. This tag is configured with the `customPromptPlatformDependencies`
parameter that defines the guidance images for each supported browser platform. It is possible to define some of them only. For missing platforms their
default configuration is used then.

By comparing this example with [Browser specific prompt dialog](#browser-specific-prompt-dialog-configuration) customization documentation you may note that
some supported keys of the platform entries are missed in this example. This is not a problem. Every missing key is supplemented from default configuration.
So it is possible to specify only the keys that you really want to change like guidance images in this case.

All other configuration keys are taken from default configuration too. So the Add-to-Homescreen React component is shown automatically on first invocation
of the application for a limited time. After that it is shown again after one day. See section [Configuration](#configuration-for-the-add-to-home-screen-module) for details about the
default configuration.

### Example `modified-behavior`

#### Where to find
This example can be found within directory `examples/modified-behavior`.

#### Build & Run
Build is done by command `npm run build:example-modified-behavior`. Compiled example is then available within directory `example/modified-behavior/dist`.

Run the example locally with command `npm run start:example-modified-behavior`. It is then available under [http://localhost:8083](http://localhost:8083). 

#### Description
This example demonstrates the behavior modification of the Add-to-Homescreen React component by changing some of its configuration parameters. It creates a simple React application
with an `App` component (see the `app.js` file) that integrates the Add-to-Homescreen React component by importing and adding it with its tag. This tag is configured with some
parameters that change the behavior. It is possible to define some of them only. For missing parameters their default configuration is used then.

In this example the Add-to-Homescreen React component is shown automatically (`startAutomatically = true`) directly after page load (`startDelay = 0`) for thirty seconds
(`lifespan = 30`) - except for the user's first visit of the page (`skipFirstVisit = true`). Therefore, the component is only shown when the page is reloaded after the first call. 
Normally, with its default configuration, the component is shown once per day. In this example, the component is shown each time the user visits the page until the user confirms 
adding it to the homescreen (`displayPace = 0`). 

Furthermore, the example demonstrates how to change the custom prompt dialog using the `customPromptContent` configuration parameter. We change the text of the dialog (`title`
parameter), the button texts (parameters `cancelMsg`, `installMsg` and `guidanceCancelMsg`) and the logo (`src` parameter).

See section [Configuration](#configuration-for-the-add-to-home-screen-module) for more details about the configuration parameters.

### Example `modified-styling`

#### Where to find
This example can be found within directory `examples/modified-styling`.

#### Build & Run
Build is done by command `npm run build:example-modified-styling`. Compiled example is then available within directory `example/modified-styling/dist`.

Run the example locally with command `npm run start:example-modified-styling`. It is then available under [http://localhost:8084](http://localhost:8084). 

#### Description
This example demonstrates the styling modification of the Add-to-Homescreen React component. It creates a simple React application with an `App` component (see the `app.js` file) 
that integrates the Add-to-Homescreen React component by importing and adding it with its tag. To change the styling this tag is configured with the `customPromptElements` and the 
`customPromptContent` parameters.

The `customPromptElements` parameter assigns CSS classes to the HTML elements of the custom prompt dialog of the Add-to-Homescreen component. It is possible to define some of them
only. For missing parameters their default configuration is used then. See section [Customizing add-to-homescreen prompt](#customizing-add-to-homescreen-prompt) for details about 
the `customPromptElements` parameter.

To change the styling we must provide a definition for the CSS classes we assigned within the `customPromptElements` parameter. These definitions can be found within the
`modifiedStyling.scss` file. This file must be included in the `app.js` file.

Our example demonstrates how the cancel button can be changed to be shown as a cross in the upper right corner of the custom prompt dialog. To achieve this we must remove the text
for the button. This can be done by definition of the `customPromptContent` dialog. In our example we set the text of the cancel buttons to an empty string and change the text of
the installation button. The other (missing) sub-parameters of the `customPromptContent` parameter are taken from default configuration of the Add-to-Homescreen component. See
section [Custom Prompt Content](#custom-prompt-content) about configuration of the custom prompt dialog.

## Live Demo

A live demo is contained in `live-demo` directory. You can inspect it immediately on GitHub Pages under https://as-ideas.github.io/add-to-homescreen-react/.

If you want to experiment by yourself you can build and deploy the live demo to your own GitHub page as follows:

1. Fork the repository
2. Run `npm run deploy:live-demo`
3. Open your web browser and go to `https://<your-github-username>.github.io/add-to-homescreen-react/`
 
## Licence

Copyright (c) 2014 Matteo Spinelli, http://cubiq.org/

Copyright (c) 2019 Chris Love, http://love2dev.com/

Copyright (c) 2019, 2020, 2021 Axel Springer Ideas Engineering GmbH, https://ideas-engineering.io/

This software is subject to the provisions of [LPGLv3](http://www.gnu.de/documents/lgpl-3.0.de.html).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
