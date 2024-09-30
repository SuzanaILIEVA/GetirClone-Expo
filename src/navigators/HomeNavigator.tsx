import { Image, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../utils/colors";
import CategoryFilterScreen from "../screens/CategoryFilterScreen/Index";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.purple },

          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                width: 70,
                height: 30,
              }}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerStyle: { backgroundColor: colors.purple },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,

          headerTitle: () => (
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              Ürünler
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
