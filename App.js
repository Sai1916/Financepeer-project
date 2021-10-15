import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Feather,Ionicons,AntDesign } from 'react-native-vector-icons'
import { ThemeProvider,useTheme, useUpdateTheme } from './context/ThemeProvider'
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieDetailScreen from './screens/MovieDetailScreen';

export default function App() {

  const Tab = createBottomTabNavigator();

  const Tabs= () => {
    return(
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ activeTintColor: "#51a6f5" }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          }} 
        />
        <Tab.Screen
          name="Chat"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-chatbubble-ellipses-outline" size={24} color={color} /> ,
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

  const Stack = createNativeStackNavigator();

  const HomeStack = () => { 
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="MovieDetailScreen" 
          component={MovieDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

  
  return (
    <NavigationContainer theme={DarkTheme}>
        <Tabs />
        <StatusBar style='light' />
    </NavigationContainer>
  ); 
}

