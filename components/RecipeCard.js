import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Modal,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { fetchCategoryName } from "../data/exportFunctions";
const slideList2 = [
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*",
  "https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg",
  "http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ",
];

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
function Slide({ data }) {
  return (
    <View
      style={{
        height: 270,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: "100%", height: 270, resizeMode: "cover" }}
      ></Image>
    </View>
  );
}

const RecipeCard = ({
  recipeCategory,
  recipeName,
  recipeDescription,
  recipeImg,
  recipeId,
  photosArray,
  ingredients,
  navigation,
  recipeTime,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const numberObjects = photosArray.map((number) => ({ image: number }));
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ width: "100%" }}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={numberObjects}
              style={{ flex: 1 }}
              horizontal
              renderItem={({ item }) => {
                return <Slide data={item} />;
              }}
            />
            <View style={styles.description}>
              <Text style={styles.openRecipeName}>{recipeName}</Text>
              <Text style={styles.openRecipeCategory}>{recipeCategory}</Text>
              <Text style={styles.openRecipeTime}>{recipeTime} minutes</Text>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => {
                  navigation.navigate("Ingredients", {
                    ingredients,
                    recipeName,
                    recipeId,
                  });
                  setModalVisible(!modalVisible);
                }}
                // onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.secondaryButtonBg}>View ingredients</Text>
              </TouchableOpacity>
              <Text style={styles.openRecipeDesc}>
                {recipeDescription.slice(0, 240)} ..{" "}
              </Text>
            </View>
            {/* <View> */}
            {/* <Image
                source={  require("../assets/clock.svg") }
                style={{ width: 20, height: 20  }}
              ></Image> */}
            {/* </View> */}
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          <View style={styles.rect}>
            <Image
              source={{ uri: recipeImg }}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <Text style={styles.recipeName}>{recipeName}</Text>
            <Text style={styles.recipeCategory}>{recipeCategory} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  openRecipeDesc: {
    color: "#000",
    fontSize: 14,
    marginTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  openRecipeTime: {
    color: "#000",
    fontSize: 14,
    marginTop: 15,
    fontWeight: "bold",
  },
  description: {
    marginBottom: "33%",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  openRecipeCategory: {
    color: "#58C176",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  openRecipeName: {
    fontSize: 23,
    fontWeight: "bold",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height: "100%",
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
    marginBottom: 40,
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
  secondaryButtonBg: {
    borderRadius: 25,
    padding: 15,
    color: "#58C176",
    width: 230,
    textAlign: "center",
    borderWidth: 2,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.7,
    fontSize: 16,
    borderColor: "#58C176",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    width: "100%",
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
