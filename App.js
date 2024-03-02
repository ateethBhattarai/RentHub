import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import StackNavigation from "./Navigation/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
