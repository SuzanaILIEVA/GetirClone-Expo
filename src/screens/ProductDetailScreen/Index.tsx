import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/Index";

import { colors } from "../../utils/colors";

export default function ProductDetailScreen(props: any) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  console.log("product=>>>>>", product);

  if (!product) {
    return <ActivityIndicator color={colors.purple} />;
  }
  return (
    <View>
      <ImageCarousel images={product?.images} />
    </View>
  );
}
