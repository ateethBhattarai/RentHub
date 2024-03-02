// // UserDashboardScreen.js

// import React from "react";
// import NavigationBar from "./../navigationBar";
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   Button,
//   StyleSheet,
// } from "react-native";

// const UserDashboard = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.section}>
//           <Text style={styles.title}>Welcome User!</Text>
//           <Text>Dashboard Content</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.title}>My Bookings</Text>
//           // Show user's booked apartments/houses
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.title}>My Favorites</Text>
//           // Show user's favorite listings
//         </View>

//         <View style={styles.section}>
//           <Button title="Log Out" />
//         </View>
//       </ScrollView>
//       <NavigationBar navigation={NavigationBar} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   section: {
//     marginVertical: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default UserDashboard;
