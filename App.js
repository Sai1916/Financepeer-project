import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Feather,Ionicons,AntDesign } from 'react-native-vector-icons'
// import { ThemeProvider,useTheme, useUpdateTheme } from './context/ThemeProvider'
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieDetailScreen from './screens/MovieDetailScreen';
import SearchScreen from './screens/SearchScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import {firebase} from './firebase'

export default function App() {

  const Tab = createBottomTabNavigator();

  const LoggedInStack= () => {
    return(
      <Tab.Navigator
        initialRouteName="Login"
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
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-chatbubble-ellipses-outline" size={24} color={color} /> ,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} /> ,
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={DownloadsScreen}
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

  const LoginStack = () => {
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

  const [user,setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  },[])
  
  return (
    <NavigationContainer theme={DarkTheme}>
      {user ? <LoggedInStack /> : <LoginStack />}
        <StatusBar style='light' />
    </NavigationContainer>
  ); 
}

