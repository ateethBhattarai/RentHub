import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavigationBar from "./navigationBar";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <Text>MessageScreen</Text>
      </View>
      <NavigationBar navigator={NavigationBar} />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
