import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ApartmentList, HouseList, RoomList } from "../components";
import NavigationBar from "./navigationBar";

const TopOptions = [
  { id: 1, label: "House" },
  { id: 2, label: "Apartments" },
  { id: 3, label: "Rooms" },
];

const HomePage = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [activeOption, setActiveOption] = useState("House");
  const [showCancelButton, setShowCancelButton] = useState(false);

  const handleSearch = () => {
    console.log("Search text:", searchText);
  };

  const handleInputChange = (text) => {
    setSearchText(text);
    setShowCancelButton(text.length > 0);
  };

  const handleCancel = () => {
    setSearchText("");
    setShowCancelButton(false);
  };

  const handleOptions = (label) => {
    setActiveOption(label);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter location..."
            value={searchText}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity style={styles.sortIcon} onPress={() => {}}>
            <Icon name="sort" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          {TopOptions.map((option) => (
            <TouchableOpacity
              style={[
                styles.icon,
                activeOption === option.label && styles.activeOptionStyle,
              ]}
              key={option.id}
              onPress={() => handleOptions(option.label)}
            >
              <Text style={styles.iconText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.listView}>
          <ScrollView>
            {activeOption === "House" && <HouseList navigation={navigation} />}
            {activeOption === "Apartments" && <ApartmentList />}
            {activeOption === "Rooms" && <RoomList />}
          </ScrollView>
        </View>
      </View>
      <NavigationBar navigator={NavigationBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
  },
  sortIcon: {
    backgroundColor: "lightgray",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonText: {
    color: "white",
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  icon: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 100,
    alignItems: "center",
  },
  activeOptionStyle: {
    backgroundColor: "grey",
  },
  iconText: {
    fontSize: 16,
    height: 30,
  },
  listView: {
    flex: 1,
  },
});

export default HomePage;
