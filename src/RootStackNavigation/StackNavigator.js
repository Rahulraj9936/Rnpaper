
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../auth/Login';
import Home from "../Screen/Home"
import Dashboard from '../Dashboard/Dashboard';

 const StackNavigator = () => {
const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
               <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      }

export default StackNavigator
