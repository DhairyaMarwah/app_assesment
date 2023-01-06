import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Recipes from '../components/Recipes';
import Ingredients from '../components/Ingredients';
import Ingredient from '../components/Ingredient';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
const Stack = createNativeStackNavigator();
function MainNavigator() {
    return(
      <Stack.Navigator
        screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            }
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Categories' component={Categories}/> 
        <Stack.Screen name='RecipesList' component={Recipes} />
        <Stack.Screen name='Ingredient' component={Ingredient} />
        <Stack.Screen name='Search' component={Home} />
        <Stack.Screen name='Ingredients' component={Ingredients} />
      </Stack.Navigator>
    )
  } 
  const Drawer = createDrawerNavigator();
  function DrawerStack() {
    return(
      <Drawer.Navigator
        drawerPosition='left'
        initialRouteName='Main'
        drawerStyle={{
          width: 250
        }}
        screenOptions={{headerShown: false}}
        drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
      >
        <Drawer.Screen name='Main' component={MainNavigator} />
      </Drawer.Navigator>
    )
  } 
  export default function AppContainer() {
    return(
      <NavigationContainer>
        <DrawerStack/>
      </NavigationContainer>
    )
  } 