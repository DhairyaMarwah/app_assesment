// import { createAppContainer,createStackNavigator } from "react-navigation";
// import {  createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home";
import Categories from "../screens/Categories";
 
const screens = {
  Home: {
    screen: Home,
  },
  Categories: {
    screen: Categories,
  },
};   
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
