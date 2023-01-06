import React, { useState, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MenuImage from "../../components/HamburgerIcon/MenuImage";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RecipeCard from "../../components/RecipeCard";
import { fetchCategoryName } from "../../data/exportFunctions";
import { recipes, categories, ingredients } from "../../data/data";

const Home = ({ navigation }) => {
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
  const route = useRoute();

  console.log(route.name);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e);
    console.log(searchTerm);
  };

  return (
    <>
      {route.name === "Search" ? (
        <>
          <View style={styles.inputContainer}>
            <View style={styles.inputRect}>
              <TextInput
                placeholder="Search..."
                style={styles.placeholder}
                value={searchTerm}
                onChangeText={(e) => handleSearchChange(e)}
              ></TextInput>
            </View>
          </View>
        </>
      ) : null}
      <ScrollView style={styles.scollContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Categories")}
        ></TouchableOpacity>
        <View style={styles.cardWrap}>
          {recipes
            ?.filter((recipe) =>
              recipe?.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((recipe, index) => (
              <>
                <TouchableOpacity key={index} style={styles.touchCard}>
                  <RecipeCard
                    photosArray={recipe.photosArray}
                    recipeName={recipe.title}
                    navigation={navigation}
                    searchTerm={searchTerm}
                    recipeId={recipe.id}
                    ingredients={recipe.ingredients}
                    recipeTime={recipe.time}
                    recipeCategory={fetchCategoryName(recipe.categoryId)}
                    recipeDescription={recipe.description}
                    recipeImg={recipe.photo_url}
                  />
                </TouchableOpacity>
              </>
            ))}
        </View>
      </ScrollView>
    </>
    // </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  inputContainer: {
    // marginTop: 20,
    height: 38,
    width: "100%",
    height: 108,
    backgroundColor: "rgba(255,255,255,1)",
    height: 38,
  },
  inputRect: {
    width: 215,

    marginLeft: "auto",
    marginRight: "auto",

    height: 38,
    backgroundColor: "rgba(237,237,237,1)",
    borderRadius: 12,
  },
  placeholder: {
    color: "#121212",
    height: 38,
    width: 194,
    marginLeft: 21,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  scollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
  },
  cardWrap: {
    width: "85%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  touchCard: {
    width: "45%",
  },
});
