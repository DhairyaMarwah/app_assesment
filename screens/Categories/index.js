import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CategoryCard from "../../components/CategoryCard";
import { fetchCountOfRecipes } from "../../data/exportFunctions";
import { categories } from "../../data/data";
import { TouchableOpacity } from "react-native-gesture-handler";
import MenuImage from "../../components/HamburgerIcon/MenuImage";

const Categories = (props) => {
  const { navigation } = props;
  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);
  return (
    <ScrollView style={styles.scollContainer}>
      <View style={styles.container}>
        {categories.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => onPressCategory(item)}>
              <CategoryCard
                key={index}
                id={fetchCountOfRecipes(item.id)}
                name={item.name}
                photo_url={item.photo_url}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Categories;
const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
