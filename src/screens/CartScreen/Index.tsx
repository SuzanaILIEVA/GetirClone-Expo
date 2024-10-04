import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem/Index";
import { colors } from "../../utils/colors";
import ProductItem from "../../components/ProductItem/Index";

const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={productsGetir.slice(0, 3)}
          renderItem={({ item }) => <CartItem product={item} />}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: colors.purple }}>
          Önerilen Ürünler
        </Text>

        <ScrollView
          style={{ backgroundColor: "white" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={true}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#fff",
          borderTopWidth: 0.09,
          borderColor: "lightgrey",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: colors.purple,
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            elevation: 7, // Android gölge efekti
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            Devam Et{" "}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 0.9,
            borderColor: "lightgrey",
            elevation: 7, // Android gölge efekti
          }}
        >
          <Text
            style={{
              color: colors.purple,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Text>{"\u20BA"}</Text>
            23,00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
