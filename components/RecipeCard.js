import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
const RecipeCard = ({ recipeCategory, recipeName, recipeImg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={{ uri: recipeImg }}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <Text style={styles.recipeCategory}>{recipeCategory}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "45%",
    padding: 0,
    margin: 0,
  },
  rect: {
    width: "100%",
    height: 216,
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
    height: 132,
    padding: 0,
    margin: 0,
    // : "cover",
  },
  recipeName: {
    //   fontFamily: "poppins-600",
    fontWeight: "bold",
    color: "rgba(18,18,18,0.7)",
    marginTop: 4,
    textAlign: "center",
    width: "100%",
  },
  recipeCategory: {
    //   fontFamily: "poppins-500",
    fontWeight: "500",
    color: "rgba(18,18,18,0.5)",
    fontSize: 12,
    marginTop: 15,
    textAlign: "center",
  },
});

export default RecipeCard;
