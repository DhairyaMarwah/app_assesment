import React from "react";
import styles from "./IngredientsStyle";
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  fetchAllIngredients,
  fetchIngredientName,
} from "../data/exportFunctions";
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const ITEM_HEIGHT = 100;
const ITEM_OFFSET = 10;
const ITEM_MARGIN = ITEM_OFFSET * 2;
const Ingredients = (props) => {
  const { navigation, route } = props;
  const item = route.params?.ingredients;
  const ingredientsArray = fetchAllIngredients(item);
  console.log(ingredientsArray);
  const onPressIngredient = (item) => {
    let name = fetchIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate("Ingredient", { ingredient, name });
  };
  const renderIngredient = ({ item }) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressIngredient(item[0])}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      vertical
      showsVerticalScrollIndicator={false}
      numColumns={3}
      data={ingredientsArray}
      renderItem={renderIngredient}
      keyExtractor={(item) => `${item.recipeId}`}
    />
  );
};
export default Ingredients;
