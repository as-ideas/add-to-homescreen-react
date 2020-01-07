# add-to-homescreen-react
[![LGPLv3 license](https://img.shields.io/badge/License-LGPLv3-blue.svg)](http://www.gnu.de/documents/lgpl-3.0.de.html)

A React component providing add-to-home-screen functionality for different platforms and browsers.

## What is it?

`add-to-homescreen-react` allows you to easily inform your user that your React application is installable on the home screen of your mobile phone or on your desktop. It provides a
highly configurable React component named `AddToHomeScreen` that supports different browsers and platforms. Where possible, browser's native add-to-homescreen functionality is used.
Where not, a guidance for the user can be shown.

This library is based on the [`add-to-homescreen`](https://github.com/docluv/add-to-homescreen) project of [Chris Love](https://github.com/docluv).

## Usage

First import the component:

```
import AddToHomeScreen from 'add-to-homescreen-react';
```

Then add the component to your app:

```
<AddToHomeScreen />
```

This is the simplest way to use this component. There is a wide range of configuration options available you can use to customize the behaviour and design of the component.
See section [Configuration for the Add-to-home-screen module](#configuration-for-the-add-to-home-screen-module) for a description of all available configuration parameters.

## Configuration for the Add-to-home-screen module

Configuration is defined in the ``addToHomeScreenConfiguration.json`` file. The following parameters exist and can be customized:

| **Configuration parameter** | **Description** | **Default Setting** |
|---|---|---|
| appId | The id of the application. It is used as key for the local storage entry. It is recommended to define it specifically for your application. | ``add-to-homescreen-react`` |
| debug | Indicates the platform that should be simulated for debugging purposes. Overrides browser checks. Possible values: `native`, `firefox`, `ipad`, `iphone`, `opera`, `samsung`, `edge`, `chromium`, `false` | ``false`` |
| activateLogging | Activate logging to JS console for the module. Defaults to `true` when `debug` is not `false`. | false | 
| isModal | Prevent further actions until the message is closed. | `false` |
| isMandatory | User can't proceed without adding the app to the home screen. | `false` |
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
| customCriteria | A hook to provide either a custom method or a simple `true` (= always) or `false` (= never) value to control when it prompts. | `null` (the same as `true`)|
| customPromptContent | Allows customization of the custom prompt dialog's content. See section [Custom Prompt Content](#custom-prompt-content) | `{}` |
| customPromptPlatformDependencies | See section [Browser specific prompt dialog configuration](#browser-specific-prompt-dialog-configuration). | |

## Custom Prompt Content

The `customPromptContent` configuration parameter allows to globally define (for all platforms) the content of the custom prompt dialog. It contains the following customizable parameters:

| **Configuration parameter** | **Description** | **Default Setting** |
|---|---|---|
| title | The title of the dialog. | `Install application?` |
| src | The URL for the logo shown in the dialog. If it is `null` no logo is shown in the dialog. | `null` |
| cancelMsg | The text of the dialog's cancel button. | `Not Now` |
| installMsg | The text of the dialog's install button. | `Install` |

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
| Firefox Browser | `firefox` |
| Samsung Phones | `samsung` |
| Opera Browser | `opera` |

The configuration entries for each platform contain the customizable parameters:

| **Configuration parameter** | **Description** |
|---|---|
| targetUrl | The URL to a page with full instructions. Can be undefined. If it is defined the current page is replace by the page this URL points to. |
| showClasses | CSS classes to be added to the HTML element specified by the `athWrapper` configuration key (see section [Configuration for the Add-to-home-screen module](#configuration-for-the-add-to-home-screen-module)) |
| imgs | REQUIRED An array of image definitions. These images represent the installation guide for the user and are shown as soon as the user clicks the install button of the custom prompt dialog. |

An image definition consists of the following configuration parameters: 

| **Configuration parameter** | **Description** |
|---|---|
| src | The URL to the image. |
| alt | The alternative text for the image. |

Here is an example for a complete platform entry:

```
'iphone': {
  targetUrl: undefined,
  showClasses: ['iphone-wrapper', 'animated', 'fadeIn', 'd-block'],
  imgs: [
    {
      src: '/images/addToHomeScreen/iphone.png',
      alt: 'Tap the Share Icon and select Add to home screen entry'
    }
  ]
}
```

## Licence

Copyright (c) 2014 Matteo Spinelli, http://cubiq.org/
Copyright (c) 2019 Chris Love, http://love2dev.com/
Copyright (c) 2019 Axel Springer Ideas Engineering GmbH, https://ideas-engineering.io/

This software is subject to the provisions of [LPGLv3](http://www.gnu.de/documents/lgpl-3.0.de.html).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.