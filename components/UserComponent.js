import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";
// import { useCollection } from "react-firebase-hooks/firebase";

const UserComponent = ({ user }) => {
  const navigation = useNavigation();
  // const userChatRef = db
  //   .collection("chats")
  //   .where("users", "array-contains", user.email);

  // const [chatSnapshot] = useCollection(userChatRef);

  const chats = async () => {
    // if (!chatAlreadyExists(user.email))
    await db
      .collection("chats")
      .add({
        users: [auth.currentUser.email, user.email],
      })
      .then(() => navigation.navigate("Chats"));
  };
  // console.log(userChatRef);

  // const chatAlreadyExists = (recipientEmail) => {
  //   // !!userChatRef?.docs.find(
  //   //   (chat) =>
  //   //     chat.data().users.find((user) => user === recipientEmail)?.length > 0
  //   // );
  // };

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
      activeOpacity={0.7}
      onPress={chats}
    >
      <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
        {user.username}
      </Text>
      <Text style={{ color: "gray", fontSize: 14 }}>{user.email}</Text>
    </TouchableOpacity>
  );
};

export default UserComponent;
