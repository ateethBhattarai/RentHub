import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginPage = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //for navigation only
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
      <Text style={styles.title}>Welcome to Renthub</Text>
      <Text style={styles.subtitle}>Discover Your Dream Home</Text>

      <TextInput
        style={styles.input}
        placeholder="Email/Phone number"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
        inputMode="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          // Implement forgot password logic
        }}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register"); // Make sure 'Register' is the correct route name
          }}
        >
          <Text style={styles.signupLinkText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff", // Or any color that matches your design
  },
  logo: {
    height: 120, // Adjust according to your logo
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  forgotPasswordText: {
    color: "blue",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "blue", // Adjust to match your design
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
  },
  signupLinkText: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold",
  },
});

export default LoginPage;
