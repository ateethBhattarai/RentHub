import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
        <Ionicons name="favorite-outline" size={24} color="black" />
        <Text style={styles.navText}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
  },
});

export default NavigationBar;
