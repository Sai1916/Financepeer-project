import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ChatListItem from "../components/ChatListItem";
import { auth, db } from "../firebase";

const ChatScreen = ({ navigation }) => {
  const [dbchats, setDBChats] = useState([]);
  useEffect(() => {
    return db.collection("chats").onSnapshot((snapshot) => {
      setDBChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const chats = dbchats.filter(
    (chat) => chat.data.users[0] === auth.currentUser.email
  );

  console.log(chats);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          padding: 12,
          borderRadius: 30,
          backgroundColor: "#8987ff",
          position: "absolute",
          bottom: 40,
          right: 30,
          zIndex: 1,
        }}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("AddChat")}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
      {chats.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {chats.map((chat, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() =>
                navigation.push("UserChat", {
                  chatId: chat.id,
                  data: chat.data,
                })
              }
            >
              <ChatListItem id={chat.id} users={chat?.data?.users} />
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
