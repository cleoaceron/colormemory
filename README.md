# Color Memory

This is technical exam for Accedo.tv

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### MAC and Windows

- Android Studio 4.0.1 or later
  - Android SDK
    - SDK Platforms marshmallow and above
    - SDK Tools install all tools
    - SDK Update Sites all available
  - Install AVD device as your emulator
- Nodejs latest LTS
  - install yarn globally

#### Additional Installation for macOS

- Cocoapod version 1.9.3 or later
- Xcode 11.6 or later

### Installing packages

- Clone the color memory project.
- cd <project_name> then yarn install

## Running on development

In order to run the application on your machine you have to open your emulator or actual device, then run one of following commands.

```
$ yarn android
$ yarn ios
```

> NOTE: yarn ios only works on macOS users only.

## Publishing to Google Play Store

Please follow the documentation [here](https://reactnative.dev/docs/signed-apk-android).

**Generating the release APK for Playstore.**

```
$ cd android &&./gradlew bundleRelease
```

**Testing the release build of your app.**

```
$ cd android && ./gradlew assembleRelease
or
$ npx react-native run-android --variant=release
```

## Running the tests

```
This command will execute test script
$ yarn test
```

```
This command will execute test script. It aso ndicates that test coverage information should be collected and reported in the output.
$ yarn test:coverage
```

## Deployment

    No documentation yet.

## Built With

- [React Native](https://reactnative.dev/) - The framework used
- [Android Studio](https://developer.android.com/) - Android Dependency
- [XCODE](https://developer.apple.com/xcode/) - IOS Dependency

## Installed Packages

- [React]- The framework used
- [Redux]- The store data used
- [Redux-Saga]- The transaction data used
- [React-Navigation-Stack]- The navigation stack used
- [React-Native-Elements]- The app elements used
- [Axios]- The api services connection used
- [React-Native-Flip-Card-Plus]- The flip component used
- [React-Native-Modal]- The modal component used
- [Formik]- The input validation used
- [Yup]- The validation schema used
