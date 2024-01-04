#!/bin/bash

# Prompt user for bundle ID
read -p "com.test1" bundleId

# Set bundle ID in necessary files
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/project.pbxproj
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/xcshareddata/xcschemes/Reactnativestandards.xcscheme
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/build.gradle
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/src/main/java/com/reactnativestandards/MainActivity.java
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/src/main/java/com/reactnativestandards/MainApplication.java
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/src/androidTest/java/com/reactnativestandards/DetoxTest.java
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/src/debug/java/com/reactnativestandards/ReactNativeFlipper.java
sed -i '' -e "s/com.reactnativestandards/com.test1/g" apps/react-native-standards/android/app/src/release/java/com/reactnativestandards/ReactNativeFlipper.java


# # Prompt user for new folder name
# read -p "test1 " newFolderName

# # Replace folder and file names
# mv ios/App ios/$newFolderName
# mv android/app/src/main/java/com/example/app android/app/src/main/java/com/example/$newFolderName

# # Update import statements in Android files
# find android/app/src/main/java/com/example/$newFolderName -type f -name "*.java" -exec sed -i '' -e "s/com.example.app/com.example.$newFolderName/g" {} +

# # Install dependencies
npm install