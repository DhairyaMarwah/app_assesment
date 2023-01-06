import React from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import CategoryCard from "../../components/CategoryCard";
import { getNumberOfRecipes } from "../../data/exportFunctions";
import { categories } from "../../data/data"; 
import { TouchableOpacity } from "react-native-gesture-handler";

const Categories = (props) => {
  const { navigation } = props;
  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };
  return (
    <ScrollView style={styles.scollContainer}>
      <View style={styles.container}>
        {categories.map((item,index) => {
          return (
            <TouchableOpacity onPress={() => onPressCategory(item)}>

           <CategoryCard key={index} id={getNumberOfRecipes(item.id)} name={item.name} photo_url={item.photo_url} />
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
  }
});
