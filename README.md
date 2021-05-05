NPM version 7.5.6
nvm version 15.10.0

Capacitor is Ionic’s official app runtime that makes it easy to deploy web apps to native platforms like iOS, Android, and more. If you’ve used Cordova in the past, consider reading more about the differences here.

If you’re still running ionic serve in the terminal, cancel it. Complete a fresh build of the Ionic project, fixing any errors that it reports:
```
ionic build
```
Next, create both the iOS and Android projects:
```
ionic cap add ios
ionic cap add android
```
Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.).

Every time you perform a build (e.g. ionic build) that updates your web directory (default: build), you'll need to copy those changes into your native projects:

```
ionic cap copy
```

Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command:

```
ionic cap sync
```
```
ionic cap open android
```

run this after build for update icon and splash screen
```
npm run resources
```

###genereate icon and splash image

https://dalezak.medium.com/generate-app-icon-and-splash-screen-images-for-ionic-framework-using-capacitor-e1f8c6ef0fd4



step1>
add android:usesCleartextTraffic="true" line in AndroidManifest.xml like:

<application
...
android:usesCleartextTraffic="true"> // add this line
...
step2>
Delete all debug folder from your android folder..
https://github.com/facebook/react-native/issues/25244