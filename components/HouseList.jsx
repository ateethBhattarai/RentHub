import React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

export default function HouseList({ navigation }) {
  // Example of item details
  const itemDetails = {
    propertyId: "123",
    propertyPrice: "$2000/month",
    propertyLocation: "123 Main St, City",
    phoneNumber: "9812345678",
    imageUrl: require("../assets/Images/Houses/House1/1.png"),
  };

  return (
    <View>
      {/* House 1 */}
      <Pressable onPress={() => navigation.push("Details", itemDetails)}>
        <View style={styles.houseItem}>
          <Image
            source={require("./../assets/Images/Houses/House1/1.png")}
            style={styles.houseImage}
          />
          <View style={styles.houseInfo}>
            <Text style={styles.housePrice}>$2000/month</Text>
            <Text style={styles.houseLocation}>123 Main St, City</Text>
          </View>
        </View>
      </Pressable>

      {/* House 2 */}
      <View style={styles.houseItem}>
        <Image
          source={require("./../assets/Images/Houses/House2/1.png")}
          style={styles.houseImage}
        />
        <View style={styles.houseInfo}>
          <Text style={styles.housePrice}>$1800/month</Text>
          <Text style={styles.houseLocation}>456 Elm St, City</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  houseItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  houseImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  houseInfo: {
    flex: 1,
  },
  housePrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  houseLocation: {
    fontSize: 14,
    color: "grey",
  },
});
