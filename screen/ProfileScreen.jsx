import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavigationBar from "./navigationBar";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <Text>ProfileScreen</Text>
      </View>
      <NavigationBar navigator={NavigationBar} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
