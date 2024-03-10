import React from "react";
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import NavigationBar from "./navigationBar";

const DetailsPage = ({ route }) => {
  const { propertyPrice, propertyLocation, imageUrl, phoneNumber } =
    route.params;

  const openDialer = (userPhoneNumber) => {
    Linking.openURL(`tel:${userPhoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.houseImage} />
        </View>
        <View style={styles.detailTextContainer}>
          <IonIcon name="location-outline" style={styles.iconStyle} />
          <Text style={styles.detailText}>{propertyLocation}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <IonIcon name="time-outline" style={styles.iconStyle} />
          <Text style={styles.detailText}>2 hour ago</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <IonIcon name="pricetags-outline" style={styles.iconStyle} />
          <Text style={styles.detailText}>{propertyPrice}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.detailText}>Description</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              officia cum est blanditiis aliquam corporis excepturi odit ea
              itaque velit commodi labore ipsum autem reiciendis at perspiciatis
              eligendi, expedita sint temporibus? Optio tempora, facilis aperiam
              odit alias laboriosam? Distinctio minus commodi excepturi ratione
              cupiditate nostrum qui et exercitationem voluptas error illo
              sapiente asperiores, dolore eligendi nulla quam nemo sint
              explicabo unde itaque doloribus esse? Inventore rerum repellat
              sunt quasi magnam sed nobis alias excepturi soluta voluptas,
              labore ab obcaecati, itaque autem vitae sit. Facilis atque natus
              iste aspernatur dolorem tempora vitae temporibus! Cum, ea
              explicabo. Reprehenderit, dolor? Obcaecati, accusantium labore?
            </Text>
          </ScrollView>
        </View>
        <View style={styles.userDetailContainer}>
          <View style={styles.userIconContainer}>
            <IonIcon name="person" style={styles.userIcon} />
          </View>
          <View style={{ alignItems: "center", gap: 4 }}>
            <Text style={styles.username}>
              {"Lorem ipsum dolor".toUpperCase()}
            </Text>
            <Text>{phoneNumber}</Text>
            <Button
              onPress={() => openDialer(phoneNumber)}
              title="Contact Now"
              color="blue"
              style={{ borderRadius: 20 }}
            />
          </View>
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
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  iconStyle: {
    color: "blue",
    fontSize: 30,
  },
  detailTextContainer: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  detailText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  houseImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
  },
  descriptionContainer: {
    height: 210,
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  userDetailContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },
  userIconContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  userIcon: {
    height: "100%",
    width: "100%",
    fontSize: 25,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailsPage;
