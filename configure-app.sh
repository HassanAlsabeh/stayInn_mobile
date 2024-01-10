echo  "Enter the Android bundle ID for your app: "
read androidBundleId
echo  "Enter the IOS bundle ID for your app: "
read iosBundleId
echo  "Enter the new Folder Name for your app: "
read newFolderName
echo  "Enter apple developer account: "
read appleDeveloperAccount
echo  "Enter App Store Connect Team ID: "
read appstoreteamID
echo  "Developer Portal Team ID: "
read portalTeamId
echo  "AppSecretIOS: "
read AppSecretIOS
echo  "AppSecretAndroid: "
read AppSecretAndroid
echo  "CodePush Deployment Key Code Prod Android: "
read CodePushDeploymentKeyCodeProdAndroid
echo  "CodePush Deployment Key Code Stage Android: "
read CodePushDeploymentKeyCodeStageAndroid
echo  "CodePush Deployment Key Code Prod IOS: "
read CodePushDeploymentKeyCodeProdIOS
echo  "CodePush Deployment Key Code Stage IOS: "
read CodePushDeploymentKeyCodeStageIOS
echo  "Fastlane key_idCode IOS: "
read key_idCode
echo  "Fastlane issuer_idCode IOS: "
read issuer_idCode
echo  "Fastlane description IOS: "
read description
echo  "Fastlane keywords IOS: "
read keywords
echo  "Fastlane marketingURL IOS: "
read marketingURL
echo  "Fastlane name IOS: "
read name
echo  "Fastlane privacyURL IOS: "
read privacyURL
echo  "Fastlane promotional_text IOS: "
read promotional_text
echo  "Fastlane release_notes IOS: "
read release_notes
echo  "Fastlane subtitle IOS: "
read subtitle
echo  "Fastlane support_url IOS: "
read support_url
echo  "Fastlane demo_password IOS: "
read demo_password
echo  "Fastlane demo_user IOS: "
read demo_user
echo  "Fastlane email_address IOS: "
read email_address
echo  "Fastlane first_name IOS: "
read first_name
echo  "Fastlane last_name IOS: "
read last_name
echo  "Fastlane notes IOS: "
read notes
echo  "Fastlane phone_number IOS: "
read phone_number
echo  "Fastlane copyright IOS: "
read copyright
echo  "Fastlane primary_category IOS: "
read primary_category
echo  "Fastlane secondary_category IOS: "
read secondary_category
echo  "Fastlane full_description Android: "
read full_description
echo  "Fastlane short_description Android: "
read short_description
echo  "Fastlane title Android: "
read title

    # Set bundle ID in necessary files
    sed -i '' -e "s/com.reactnativestandards/$iosBundleId/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/project.pbxproj
    sed -i '' -e "s/com.reactnativestandards/$iosBundleId/g" apps/react-native-standards/ios/Reactnativestandards.xcodeproj/xcshareddata/xcschemes/Reactnativestandards.xcscheme
    sed -i '' -e "s/com.reactnativestandards/$iosBundleId/g" apps/react-native-standards/ios/fastlane/Appfile
    sed -i '' -e "s/appleDeveloperAccount/$appleDeveloperAccount/g" apps/react-native-standards/ios/fastlane/Appfile
    sed -i '' -e "s/appstoreteamID/$appstoreteamID/g" apps/react-native-standards/ios/fastlane/Appfile
    sed -i '' -e "s/portalTeamId/$portalTeamId/g" apps/react-native-standards/ios/fastlane/Appfile
    sed -i '' -e "s/AppSecretIOS/$AppSecretIOS/g" apps/react-native-standards/ios/ReactNativeStandards/AppCenter-Config.plist
    sed -i '' -e "s/AppSecretAndroid/$AppSecretAndroid/g" apps/react-native-standards/android/app/src/main/assets/appcenter-config.json
    sed -i '' -e "s/description/$description/g" apps/react-native-standards/ios/fastlane/metadata/en-US/description.txt
    sed -i '' -e "s/keywords/$keywords/g" apps/react-native-standards/ios/fastlane/metadata/en-US/keywords.txt
    sed -i '' -e "s/marketingURL/$marketingURL/g" apps/react-native-standards/ios/fastlane/metadata/en-US/keywords.txt
    sed -i '' -e "s/name/$name/g" apps/react-native-standards/ios/fastlane/metadata/en-US/name.txt
    sed -i '' -e "s/privacyURL/$privacyURL/g" apps/react-native-standards/ios/fastlane/metadata/en-US/privacy_url.txt
    sed -i '' -e "s/promotional_text/$promotional_text/g" apps/react-native-standards/ios/fastlane/metadata/en-US/promotional_text.txt
    sed -i '' -e "s/release_notes/$release_notes/g" apps/react-native-standards/ios/fastlane/metadata/en-US/release_notes.txt
    sed -i '' -e "s/subtitle/$subtitle/g" apps/react-native-standards/ios/fastlane/metadata/en-US/subtitle.txt
    sed -i '' -e "s/support_url/$support_url/g" apps/react-native-standards/ios/fastlane/metadata/en-US/support_url.txt
    sed -i '' -e "s/demo_user/$demo_user/g" apps/react-native-standards/ios/fastlane/metadata/review_information/demo_user.txt
    sed -i '' -e "s/demo_password/$demo_password/g" apps/react-native-standards/ios/fastlane/metadata/review_information/demo_password.txt
    sed -i '' -e "s/email_address/$email_address/g" apps/react-native-standards/ios/fastlane/metadata/review_information/email_address.txt
    sed -i '' -e "s/first_name/$first_name/g" apps/react-native-standards/ios/fastlane/metadata/review_information/first_name.txt
    sed -i '' -e "s/last_name/$last_name/g" apps/react-native-standards/ios/fastlane/metadata/review_information/last_name.txt
    sed -i '' -e "s/notes/$notes/g" apps/react-native-standards/ios/fastlane/metadata/review_information/notes.txt
    sed -i '' -e "s/phone_number/$phone_number/g" apps/react-native-standards/ios/fastlane/metadata/review_information/phone_number.txt
    sed -i '' -e "s/copyright/$copyright/g" apps/react-native-standards/ios/fastlane/metadata/copyright.txt
    sed -i '' -e "s/primary_category/$primary_category/g" apps/react-native-standards/ios/fastlane/metadata/primary_category.txt
    sed -i '' -e "s/secondary_category/$secondary_category/g" apps/react-native-standards/ios/fastlane/metadata/secondary_category.txt
    sed -i '' -e "s/key_idCode/$key_idCode/g" apps/react-native-standards/ios/fastlane/Fastfile
    sed -i '' -e "s/issuer_idCode/$issuer_idCode/g" apps/react-native-standards/ios/fastlane/Fastfile
    sed -i '' -e "s/full_description/$full_description/g" apps/react-native-standards/android/fastlane/metadata/android/en-GB/full_description.txt
    sed -i '' -e "s/short_description/$short_description/g" apps/react-native-standards/android/fastlane/metadata/android/en-GB/short_description.txt
    sed -i '' -e "s/title/$title/g" apps/react-native-standards/android/fastlane/metadata/android/en-GB/title.txt
    sed -i '' -e "s/CodePushDeploymentKeyCodeStageIOS/$CodePushDeploymentKeyCodeStageIOS/g" apps/react-native-standards/ios/fastlane/Fastfile
    sed -i '' -e "s/CodePushDeploymentKeyCodeProdIOS/$CodePushDeploymentKeyCodeProdIOS/g" apps/react-native-standards/ios/fastlane/Fastfile
    sed -i '' -e "s/reactnativestandards/$newFolderName/g" apps/react-native-standards/ios/fastlane/Fastfile
    sed -i '' -e "s/CodePushDeploymentKeyCodeStageAndroid/$CodePushDeploymentKeyCodeStageAndroid/g" apps/react-native-standards/android/app/build.gradle
    sed -i '' -e "s/CodePushDeploymentKeyCodeProdAndroid/$CodePushDeploymentKeyCodeProdAndroid/g" apps/react-native-standards/android/app/build.gradle
    sed -i '' -e "s/CodePushDeploymentKeyCodeProdAndroid/$CodePushDeploymentKeyCodeProdAndroid/g" apps/react-native-standards/android/app/src/main/res/values/strings.xml
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/fastlane/Appfile
    sed -i '' -e "s/com.reactnativestandards/$androidBundleId/g" apps/react-native-standards/android/fastlane/Fastfile
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
    mv apps/react-native-standards apps/$newFolderName
    mv apps/react-native-standards-e2e apps/$newFolderName-e2e
    # Update import statements in Android files
    # find android/app/src/main/java/com/example/$newFolderName -type f -name "*.java" -exec sed -i '' -e "s/com.example.app/com.exampl e.$newFolderName/g" {} +
    # Install dependencies

echo -n "Enter the new Repo URL:"
read newRepoUrl
git remote set-url origin $newRepoUrl

# Step 5: Push Changes
git push -u origin master

# Step 6 (Optional): Set Upstream Remote
echo "Enter the URL of the Original Template Repository (Optional):"
read originalTemplateRepoUrl

git remote add upstream $originalTemplateRepoUrl

echo "Script completed successfully."

    npm install

# run this commanf in the root folder: ./configure-app.sh  # echo "Entered Folder Name: $newFolderName"
# echo "Entered Android bundle ID: $androidBundleId"
# echo "Entered IOS bundle ID: $iosBundleId"
# echo "appleDeveloperAccount: $appleDeveloperAccount"
# echo "appstoreteamID: $appstoreteamID"
# echo "portalTeamId: $portalTeamId"
# echo "CodePushDeploymentKeyCodeStageAndroid: $CodePushDeploymentKeyCodeStageAndroid"
# echo "CodePushDeploymentKeyCodeProdAndroid: $CodePushDeploymentKeyCodeProdAndroid"
# echo "CodePushDeploymentKeyCodeStageIOS: $CodePushDeploymentKeyCodeStageIOS"
# echo "CodePushDeploymentKeyCodeProdIOS: $CodePushDeploymentKeyCodeProdIOS"

