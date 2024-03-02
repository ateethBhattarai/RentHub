import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/Images/Logo/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to RentHub</Text>
      <Text style={styles.subtitle}>
        Find your next home in just a few click...
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Get started!</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // Or any color that matches your design
  },
  logo: {
    height: 118,
    width: 123, // Adjust according to your logo
    resizeMode: "contain", // Keeps logo aspect ratio
  },
  title: {
    color: "#482B00",
    padding: 10,
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#584D3D",
    marginBottom: 16,
  },
  description: {
    textAlign: "center",
    color: "#482B00",
    marginHorizontal: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1F51FF", // Adjust to match your design
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#482B00",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  loginText: {
    color: "#482B00", // Adjust to match your design
  },
});

export default WelcomePage;
