import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import { Loginstack } from './routes/loginstack';
import { BaseNavigationContainer, NavigationContainer,createBottomTabNavigator} from '@react-navigation/native';
import LandingPage from './screens/landing';
import HomeScreen from './screens/homescreen';
import Cart from './screens/cart';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator    initialRouteName="LandingPage">
    
     <Stack.Screen name='Landingpage' component={LandingPage} options={{headerShown:false}}/>
       
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#52AD9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack :{
    backgroundColor: '#52AD9C'
  }
});

 


