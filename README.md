# PatsiukUI

React version available in `react-app` folder using Tailwind CSS for styling.

Used tools, libraries and languages:<br>
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![JSQ](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
<br>
Hosted by Netlify <br> [![Netlify Status](https://api.netlify.com/api/v1/badges/2cdefe4e-57cb-4ba2-a397-374973534931/deploy-status)](https://app.netlify.com/sites/patsiukui/deploys)

## Overview
PatsiukUI is an interactive translation tool designed to assist translators and localization communities in their work. This tool provides advanced customization options and translation memory features to streamline the translation process.

## Key Features
- **Interactive Interface**: PatsiukUI offers an intuitive interface for translators to work efficiently.
- **Customization**: Advanced customization options allow users to personalize the tool according to their preferences.
- **Translation Memory**: The tool includes a translation memory feature to help maintain consistency and improve productivity.
- **Snapshot and Copy**: Users can easily capture screenshots of their work and copy text for further use.

## Usage
1. **Background Setting**: Customize the background by providing a link to an image or selecting a background color.
2. **Card Customization**: Adjust the size, border radius, and gap between translation cards.
3. **Translation Input**: Add new translation items by providing the title, image link, and translation progress.
4. **Snapshot and Copy**: Capture screenshots or copy text with the click of a button.

## Getting Started
To get started with PatsiukUI, follow these steps:
1. Clone or download the repository from [GitHub](https://github.com/SKZGx/PatsiukUI).
2. Open the `index.html` like a localserver.
3. Customize the settings and start translating!

## Contributing
Contributions to PatsiukUI are welcome! If you have any ideas for improvements or new features, feel free to submit a pull request or open an issue on GitHub.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or support, you can reach out to the creator:
- Creator: MEGATREX4
- Website: [MEGATREX4's Portfolio](https://megatrex4.netlify.app/)
- GitHub: [MEGATREX4 on GitHub](https://github.com/MEGATREX4)
- Telegram: [Patsiuk Localizator](https://t.me/patsiuk_localizator)
<br><br><br><br><br>
# Detailed Information

## Introduction
This document provides detailed information on the functionality and usage of the burger menu settings code implemented using JavaScript.

## Code Overview
The provided JavaScript code implements functionality for managing burger menu settings, including the customization of various UI elements such as border radius, image gap, card background, text color, background image, and background color. It allows users to reset settings, apply changes in real-time, save settings to local storage, and load settings from local storage.

### Key Components
1. `idCounter`: Variable for generating unique IDs.
2. `burgerMenuState`: Object to store current burger menu settings.
3. `standardSettings`: Default settings for the burger menu.
4. Functions:
   - `resetBurgerMenuStyles()`: Resets burger menu styles to default values.
   - `applyBurgerMenuStyles()`: Applies current burger menu styles to UI elements.
   - `updateBurgerMenuState()`: Updates burger menu state with current form values.
   - `showBurgerMenu()`, `hideBurgerMenu()`: Functions to show/hide the burger menu.
   - `updateCardSize(scaleValue)`: Updates card size based on scale value.
   - `storeItemInLocalStorage(item)`: Stores item details in local storage.
   - `loadItemsFromLocalStorage()`: Loads items from local storage and displays them.
   - `removeItemFromLocalStorage(itemId)`: Removes item from local storage by ID.
   - `addStoredItemToUI(item)`: Adds stored item to the UI.
   - `updateMemoryValues(itemId, field, value)`: Updates values in local storage and UI dynamically.
   - `captureScreenshotWithDomToImage()`: Captures screenshot of UI using dom-to-image library.
   - `makeImage(uri)`: Creates an image with specified URI.

## Usage
1. **Setting Customization**:
   - Adjust settings using input fields and sliders.
   - Apply changes in real-time by interacting with UI elements.

2. **Resetting Settings**:
   - Click on the "Reset" button to reset settings to default values.

3. **Saving and Loading Settings**:
   - Changes are automatically saved to local storage.
   - Settings are loaded from local storage on page load.

4. **Managing Items**:
   - Add items with title, image, translated, and approved values.
   - Remove items by clicking on the remove button.

5. **Additional Features**:
   - Copy the percentage text to clipboard.
   - Capture a screenshot of the UI.
   - Use color picker to select background color.

## Conclusion
The burger menu settings code provides a flexible and user-friendly interface for customizing UI elements and managing items. Users can easily adjust settings, save preferences, and interact with the UI in real-time.

