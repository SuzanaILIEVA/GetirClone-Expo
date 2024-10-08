import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../models";
import { colors } from "../../utils/colors";
import Entypo from "@expo/vector-icons/Entypo";

type CartItemProps = {
  product: Product;
};

const { width, height } = Dimensions.get("window");
const CartItem = ({ product }: CartItemProps) => {
  return (
    <View style={{ width: "100%", backgroundColor: "#fff" }}>
      <View
        style={{
          height: height * 0.13,
          paddingHorizontal: width * 0.04,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "lightgrey",
          width: width * 0.92,
          marginHorizontal: width * 0.04,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderWidth: 0.45,
              borderBlockColor: "lightgray",
              borderRadius: 8,
              padding: 5,
            }}
          >
            <Image
              style={{
                width: height * 0.09,
                height: height * 0.09,
              }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                maxWidth: width * 0.42,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: colors.graycolor,
                fontWeight: "bold",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: colors.purple,
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              {" "}
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width * 0.22,
            height: height * 0.04,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderWidth: 0.8,
            borderColor: "lightgrey",

            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>
              <Entypo name="minus" size={18} color={colors.purple} />
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.purple,
              height: height * 0.037,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              2
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>
              <Entypo name="plus" size={18} color={colors.purple} />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
