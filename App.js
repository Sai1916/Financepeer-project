import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { Feather, Ionicons, MaterialIcons } from 'react-native-vector-icons'

export default function App() {

  const Tab = createBottomTabNavigator();

  const Tabs= () => {
    return(
      <Tab.Navigator initialRouteName={HomeScreen}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={
            {
              headerShown: false,
            }
          }
          tabBarIcon={<Feather name="home" size="24" />}
        />
        <Tab.Screen 
          name="Movies" 
          component={HomeScreen} 
          options={
            {
              headerShown: false,
            }
          }
          tabBarIcon={<Feather name="home" size="24" />}
        />
        <Tab.Screen 
          name="Coming Soon" 
          component={HomeScreen} 
          options={
            {
              headerShown: false,
            }
          }
          tabBarIcon={<Feather name="home" size="24" />}
        />
        <Tab.Screen 
          name="Settings" 
          component={HomeScreen} 
          tabBarIcon={<Feather name="home" size="24" />}
        />
      </Tab.Navigator>
    )
  }

  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}

