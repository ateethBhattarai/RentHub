import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginPage from "../screen/UserScreen/LoginPage";
import RegisterPage from "../screen/UserScreen/RegisterPage";
import SelectUserTypePage from "../screen/UserScreen/SelectUserType";
import WelcomePage from "../screen/UserScreen/WelcomePage";
import HomeScreen from "../screen/HomeScreen";
import DetailsScreen from "../screen/DetailsScreen";
import FavouriteScreen from "../screen/FavouriteScreen";
import MessageScreen from "../screen/MessageScreen";
import ProfileScreen from "../screen/ProfileScreen";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Select User Type" component={SelectUserTypePage} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
