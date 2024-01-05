echo -n "Enter the Android bundle ID for your app: "
read androidBundleId
echo -n "Enter the IOS bundle ID for your app: "
read iosBundleId
echo -n "Enter the new Folder Name for your app: "
read newFolderName
echo "Entered Folder Name: $newFolderName"
echo "Entered Android bundle ID: $androidBundleId"
echo "Entered IOS bundle ID: $iosBundleId"
    # Set bundle ID in necessary files
    sed -i '' -e "s/com.reactnativestandards/$iosBundleId/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/project.pbxproj
    sed -i '' -e "s/com.reactnativestandards/$iosBundleId/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/xcshareddata/xcschemes/Reactnativestandards.xcscheme
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/build.gradle
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/src/main/java/com/reactnativestandards/MainActivity.java
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/src/main/java/com/reactnativestandards/MainApplication.java
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/src/androidTest/java/com/reactnativestandards/DetoxTest.java
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/src/debug/java/com/reactnativestandards/ReactNativeFlipper.java
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/app/src/release/java/com/reactnativestandards/ReactNativeFlipper.java
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/app.json
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/android/settings.gradle
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/android/app/src/main/java/com/reactnativestandards/MainActivity.java
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/android/app/src/main/res/values/strings.xml
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/Podfile
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/src/main.tsx
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/src/app/App.tsx
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards-e2e/.detoxrc.json
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards-e2e/src/app.spec.ts
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards/AppDelegate.mm
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards/Info.plist
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards/LaunchScreen.storyboard
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards.xcodeproj/project.pbxproj
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards.xcodeproj/xcshareddata/xcschemes/ReactNativeStandards.xcscheme
    sed -i '' -e "s/ReactNativeStandards/$newFolderName/g" apps/react-native-standards/ios/ReactNativeStandards.xcworkspace/contents.xcworkspacedata
    sed -i '' -e "s/react-native-standards/$newFolderName/g" .gitignore
    sed -i '' -e "s/react-native-standards/$newFolderName/g" apps/react-native-standards/jest.config.ts
    sed -i '' -e "s/react-native-standards/$newFolderName/g" apps/react-native-standards/package.json
    sed -i '' -e "s/react-native-standards/$newFolderName/g" apps/react-native-standards/project.json
    sed -i '' -e "s/react-native-standards/$newFolderName/g" apps/react-native-standards-e2e/.detoxrc.json
    sed -i '' -e "s/react-native-standards/$newFolderName/g" apps/react-native-standards-e2e/project.json
   # Prompt user for new folder name
    # Replace folder and file names
    mv apps/react-native-standards/ios/ReactNativeStandards apps/react-native-standards/ios/$newFolderName
    mv apps/react-native-standards/ios/ReactNativeStandards.xcodeproj apps/react-native-standards/ios/$newFolderName.xcodeproj
    mv apps/react-native-standards/ios/ReactNativeStandards.xcworkspace apps/react-native-standards/ios/$newFolderName.xcworkspace
    mv apps/react-native-standards/ios/ReactNativeStandardsTests apps/react-native-standards/ios/${newFolderName}Test
    mv apps/react-native-standards/android/app/src/main/java/com/reactnativestandards apps/react-native-standards/android/app/src/main/java/com/$newFolderName

/Users/hassanalsabeh/Desktop/mobile_development/org/apps/react-native-standards/android/app/src/staging/res/values/strings.xml
    
    mv apps/react-native-standards apps/$newFolderName
    mv apps/react-native-standards-e2e apps/$newFolderName-e2e
    # Update import statements in Android files
    # find android/app/src/main/java/com/example/$newFolderName -type f -name "*.java" -exec sed -i '' -e "s/com.example.app/com.exampl e.$newFolderName/g" {} +
    # Install dependencies
    npm install

# run this commanf in the root folder: ./configure-app.sh  