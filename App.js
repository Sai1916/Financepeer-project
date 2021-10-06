import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Feather,MaterialIcons,AntDesign } from 'react-native-vector-icons'
import { ThemeProvider,useTheme, useUpdateTheme } from './context/ThemeProvider'
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default function App() {

  const Tab = createBottomTabNavigator();

  const Tabs= () => {
    return(
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ activeTintColor: "#51a6f5" }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          }} 
        />
        <Tab.Screen
          name="ComingSoon"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} /> ,
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> ,
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} /> ,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} /> ,
          }}
        />
      </Tab.Navigator>
    )
  }
  
  return (
    <NavigationContainer theme={DarkTheme}>
        <Tabs />
        <StatusBar style='light' />
    </NavigationContainer>
  ); 
}

