// import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     GetFCMToken();
//   }
// }

// async function GetFCMToken() {
//   const fcmtoken = await AsyncStorage.getItem('fcmtoken');
//   // Alert.alert(fcmtoken);
//   console.log(fcmtoken, 'old token');
//   // sendFcmToken(fcmtoken);
//   if (!fcmtoken) {
//     try {
//       const fcmtoken = await messaging().getToken();
//       // sendFcmToken(fcmtoken);
//       if (fcmtoken) {
//         // Alert.alert('fcmtoken');
//         console.log(fcmtoken, 'new token');

//         await AsyncStorage.setItem('fcmtoken', JSON.stringify(fcmtoken));
//         console.log('fcmtoken', fcmtoken);
//         // sendFcmToken(fcmtoken);
//       }
//     } catch (error) {
//       console.log(error, 'error in fcmtoken');
//     }
//   }
// }

// export const NotificationListener = () => {
//   // Assume a message-notification contains a "type" property in the data payload of the screen to open

//   messaging().onNotificationOpenedApp((remoteMessage) => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification
//     );
//   });

//   // Check whether an initial notification is available
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage) => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification
//         );
//       }
//     });

//   messaging().onMessage(async (remoteMessage) => {
//   });
// };

// // export default {requestUserPermission};
