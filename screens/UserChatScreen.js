import React, { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "react-native-vector-icons";

const UserChatScreen = ({ navigation, route }) => {
  const { email } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: email,
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginRight: 30 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  });

  const [message, setMessage] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
      <View style={{ flex: 1 }}>
        <Text>Messages</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "white",
          height: 50,
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <MaterialIcons name="keyboard" size={24} color="black" />
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Type a message"
            style={{ color: "black" }}
            value={message}
            onChangeText={(val) => setMessage(val)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "lightgreen",
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="send" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserChatScreen;
