import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';  
import Categories from './screens/Categories';
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (  
    <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Categories" component={Categories} />
      </Drawer.Navigator>
    </NavigationContainer> 
     
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
