import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ChatListItem from "../components/ChatListItem";

const ChatScreen = () => {
  const [chats, setChats] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          padding: 12,
          borderRadius: 30,
          backgroundColor: "#6670ff",
          position: "absolute",
          bottom: 40,
          right: 30,
          zIndex: 1,
        }}
        activeOpacity={0.6}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
      {chats.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {chats.map((chat, index) => (
            <TouchableOpacity key={index} activeOpacity={0.7}>
              <ChatListItem />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "white" }}>No Chats</Text>
        </View>
      )}
    </View>
  );
};

export default ChatScreen;
