import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import { colors } from "../../utils/colors";
import { Category } from "../../models";

//CategoryItem

const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
const Index = ({ item }: categoryItemProps) => {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }}
        source={{ uri: item.src }}
      />
      <Text
        style={{ fontSize: 13, color: colors.textColor, fontWeight: "500" }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Index;
