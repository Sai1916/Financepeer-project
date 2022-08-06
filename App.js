import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Feather, Ionicons, AntDesign } from "react-native-vector-icons";
// import { ThemeProvider,useTheme, useUpdateTheme } from './context/ThemeProvider'
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailScreen from "./screens/MovieDetailScreen";
import SearchScreen from "./screens/SearchScreen";
import DownloadsScreen from "./screens/DownloadsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { auth, firebase } from "./firebase";
import ChatScreen from "./screens/ChatScreen";
import AddChatScreen from "./screens/AddChatScreen";
import useAuth, { AuthProvider } from "./context/useAuth";
import UserChatScreen from "./screens/UserChatScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  const LoggedInStack = () => {
    return (
      <Tab.Navigator
        //initialRouteName="Login"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#8987ff",
          tabBarActiveTintColor: "white",
          tabBarItemStyle: {
            borderRadius: 50,
            marginHorizontal: 12,
          },
          // tabBarStyle: {
          //   paddingVertical: 2,
          // },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="ios-chatbubble-ellipses-outline"
                size={26}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={26} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={DownloadsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="download" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

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
    );
  };

  const SearchStack = () => {
    return (
      <Stack.Navigator initialRouteName="Search Movie">
        <Stack.Screen name="Search Movie" component={SearchScreen} />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  const ChatStack = () => {
    return (
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="UserChat" component={UserChatScreen} />
      </Stack.Navigator>
    );
  };

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
    );
  };

  // const { user, userEmail } = useAuth();
  // console.log(user, userEmail, "in App");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AppNavigator = () => {
    return <>{user ? <LoggedInStack /> : <LoginStack />}</>;
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
