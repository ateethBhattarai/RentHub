import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const RegisterPage = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneEmail, setPhoneEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    navigation.navigate("Select User Type");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/Images/Logo/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Register your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number/Email"
        value={phoneEmail}
        onChangeText={setPhoneEmail}
        keyboardType={phoneEmail.includes("@") ? "email-address" : "phone-pad"}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white", // Or any color that matches your design
  },
  logo: {
    height: 100, // Adjust according to your logo
    resizeMode: "contain", // Keeps logo aspect ratio
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: "#482B00",
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#482B00",
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    width: "40%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#482B00",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#482B00",
    fontWeight: "bold",
  },
});

export default RegisterPage;
