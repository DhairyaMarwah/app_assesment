import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
const CategoryCard = ({ photo_url, name, id }) => {
  return (
    <TouchableOpacity
      style={styles.categoryCard}
      // onPress={() => navigation.navigate("Recipes", { item })}
    >
      <View style={styles.rect}>
        <Image
          source={{ uri: photo_url }}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.recipeName}>{name}</Text>
        <Text style={styles.recipeCategory}>{id} recipes</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    margin: 0,
  },
  rect: {
    width: "100%",
    // height: 216,
    padding: 0,
    margin: 0,
    paddingBottom: 10,
    // height: "100%",
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 14,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: 14,
    height: 152,
    padding: 0,
    margin: 0,
    // : "cover",
  },
  recipeName: {
    //   fontFamily: "poppins-600",
    fontWeight: "700",
    color: "rgba(18,18,18,0.7)",
    fontSize: 18,
    marginTop: 4,
    textAlign: "center",
    width: "100%",
  },
  recipeCategory: {
    //   fontFamily: "poppins-500",
    fontWeight: "500",
    color: "rgba(18,18,18,0.5)",
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
});

export default CategoryCard;
