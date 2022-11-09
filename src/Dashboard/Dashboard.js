import React, { Fragment } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabView from "./BottomTabView";
import BottomTabViewActive from "./BottomTabViewActive";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Home from "../Screen/Home";
import  Setting  from '../Screen/Setting';
import CallDetails from "../Screen/CallDetails"
import {Homee,settings,Calllog} from "../assets/Index";
const Dashboard = () => {
  return (
<SafeAreaProvider>
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#50AFE4",
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "#1d1d1d",
      tabBarStyle: {
        height: 50,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: '#fff',
      marginBottom:2
      },
    })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <BottomTabViewActive
                  icon={Homee}
                  title={"Home"}
                />
              ) : (
                <BottomTabView icon={Homee} title={"Home"} />
              ),
          }}
        />
     <Tab.Screen
          name="CallDetails"
          component={CallDetails}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <BottomTabViewActive
                  icon={Calllog}
                  title={"Call Log"}
                />
              ) : (
                <BottomTabView icon={Calllog} title={"Call Log"} />
              ),
          }}
        />
     <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <BottomTabViewActive
                  icon={settings}
                  title={"Setting"}
                />
              ) : (
                <BottomTabView icon={settings} title={"Setting"} />
              ),
          }}
        />
      
   
        </Tab.Navigator>
        </SafeAreaProvider>
  );
};

export default Dashboard;

