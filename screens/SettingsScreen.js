import React, { useState } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
// import {useUpdateTheme} from '../context/ThemeProvider'
import { MaterialIcons } from "react-native-vector-icons";
import useAuth from "../context/useAuth";

const SettingsScreen = () => {
  const { signOutHandler } = useAuth();

  const data = [
    {
      text: "View Profile",
    },
    {
      text: "Change Password",
    },
    {
      text: "Switch Account",
    },
    {
      text: "Delete Account",
    },
    {
      text: "Support and Help",
    },
    {
      text: "Logout",
    },
  ];

  const signOutHandle = (text) => {
    try {
      if (text === "Logout") {
        signOutHandler();
      } else {
        Alert.alert(text);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 160,
          width: 160,
          alignSelf: "center",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 80,
          padding: 5,
          marginVertical: 20,
        }}
      >
        <Image
          source={require("../assets/userImg.png")}
          style={{ height: "100%", width: "100%", borderRadius: 70 }}
        />
      </View>
      {data.map((val, index) => (
        <View
          key={index}
          style={{
            borderBottomWidth: 0.3,
            borderBottomColor: "lightgray",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => signOutHandle(val.text)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>{val.text}</Text>
            <MaterialIcons name="arrow-forward-ios" size={18} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
