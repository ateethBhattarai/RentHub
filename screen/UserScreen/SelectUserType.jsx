import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const SelectUserTypePage = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleRegister = () => {
    // navigation function
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: "Home" }],
    //   })
    // );
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/Images/Logo/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Select User Type</Text>
      <Text style={styles.subtitle}>To continue select your role</Text>

      <TouchableOpacity
        style={[
          styles.option,
          selectedType === "User" && styles.selectedOption,
        ]}
        onPress={() => setSelectedType("User")}
      >
        <Image
          source={require("./../../assets/Images/User/user.png")} // Replace with your user icon image path
          style={styles.icon}
        />
        <Text style={styles.optionText}>User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedType === "PropertyOwner" && styles.selectedOption,
        ]}
        onPress={() => setSelectedType("PropertyOwner")}
      >
        <Image
          source={require("./../../assets/Images/PropertyOwner/propertyowner.png")} // Replace with your property owner icon image path
          style={styles.icon}
        />
        <Text style={styles.optionText}>PropertyOwner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around", // Adjust spacing based on your design
    backgroundColor: "white",
  },
  logo: {
    height: 131, // Adjust according to your logo
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#482B00",
    fontWeight: "bold",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedOption: {
    borderRadius: 20,
    borderColor: "#482B00", // Adjust to your theme
  },
  icon: {
    width: 100, // Adjust based on your icon size
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#fff", // Adjust to match your design
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#482B00",
  },
  registerButtonText: {
    color: "#482B00",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SelectUserTypePage;
