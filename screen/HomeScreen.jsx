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

const TopOptions = [
  { id: 1, label: "House", component: <HouseList /> },
  { id: 2, label: "Apartments", component: <ApartmentList /> },
  { id: 3, label: "Rooms", component: <RoomList /> },
];

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeOption, setactiveOption] = useState("House");
  const [showCancelButton, setShowCancelButton] = useState(false);

  const handleSearch = () => {
    // Perform search based on the searchText state
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
    setactiveOption(label);
  };

  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
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

      {/* Show House Options */}
      <View style={styles.listView}>
        <ScrollView>
          {TopOptions.map((options) => (
            <View key={options.id}>
              {activeOption === options.label && options.component}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
