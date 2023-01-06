import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Ingredients from "./components/Ingredients";
import Ingredient from "./components/Ingredient";
import Recipes from "./components/Recipes";
import AppContainer from "./routes/Navigation"; 

export default function App() {
  return (
    // <NavigationContainer>
    //    <Drawer.Navigator >
    //    <Drawer.Screen name="Home" component={Home} />
    //      <Drawer.Screen name="Search" component={Home} />
    //      <Drawer.Screen name="Categories" component={Categories} />
    //       <Drawer.Screen name="Ingredients"   component={Ingredients}/>
    //       <Drawer.Screen name="Ingredient"   component={Ingredient}/>
    //       <Drawer.Screen name="RecipesList"   component={Recipes}/>
    //  </Drawer.Navigator>
    // </NavigationContainer>
    <AppContainer/>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
