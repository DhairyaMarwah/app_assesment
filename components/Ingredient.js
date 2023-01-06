import React,{useLayoutEffect} from 'react'
import {Dimensions, StyleSheet,FlatList, ScrollView, Text, View, Image, TouchableHighlight } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from '../data/exportFunctions';
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;
const Ingredient = (props) => {
    const { navigation, route } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);
    const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;
  const renderRecipes = ({ item }) => (
    <TouchableOpacity   >
      <TouchableOpacity    >
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.mainContainer}>
    <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
      <Image style={styles.photoIngredient} source={{ uri: "" + ingredientUrl }} />
    </View>
    <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getRecipesByIngredient(ingredientId)} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  </ScrollView>
  )
}

export default Ingredient
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: RECIPE_ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
      },
    ingredientInfo: {
        color: 'black',
        margin: 10,
        fontSize: 19,
        textAlign: 'left',
        fontWeight: 'bold'
      },
      photoIngredient: {
        width: '100%',
        height: 250,
        alignSelf: 'center'
      },
      photo: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        marginTop: 5,
        marginBottom: 5
      }
  });
  