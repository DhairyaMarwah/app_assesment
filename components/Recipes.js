import React, { useLayoutEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { getRecipes, getCategoryName } from "../data/exportFunctions";
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
const numColumns = 3;
// item size
const ITEM_HEIGHT = 100;
const ITEM_OFFSET = 10;
const ITEM_MARGIN = ITEM_OFFSET * 2;
const Recipes = (props) => {
  const { navigation, route } = props;
  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);
  const renderRecipes = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

export default Recipes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: ITEM_MARGIN,
    marginTop: 20,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * ITEM_MARGIN) / recipeNumColums,
    height: ITEM_HEIGHT + 75,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 15,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * ITEM_MARGIN) / recipeNumColums,
    height: ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
