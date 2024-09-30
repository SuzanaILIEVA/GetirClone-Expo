import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";

import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigators from "./src/navigators/RouteNavigators";

const prefix = Linking.createURL("/");

export default function App() {
  return (
    <NavigationContainer>
      <RouteNavigators />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: "15%",
  },
});
