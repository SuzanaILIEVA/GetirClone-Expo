import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering/Index";
import { Category } from "../../models";
import TypeFiltering from "../../components/TypeFiltering/Index";

const Index = (props: any) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
    </ScrollView>
  );
};

export default Index;
