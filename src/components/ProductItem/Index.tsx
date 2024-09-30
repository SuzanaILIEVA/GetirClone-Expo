import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 8,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
          borderWidth: 0.3,
          borderColor: "gray",
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: width * 0.28,
            height: width * 0.28,
            borderWidth: 0.3,
            borderColor: "gray",
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
        <Text style={{ fontSize: 17, color: "#5D3EBD", fontWeight: "bold" }}>
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 5 }}>
        {item.name}
      </Text>
      <Text style={{ color: "gray", fontWeight: "bold", marginTop: 4 }}>
        {item.miktar}
      </Text>

      <View
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          backgroundColor: "#fff",
          borderColor: "lightgray",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.07,
        }}
      >
        <Entypo name="plus" size={24} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
