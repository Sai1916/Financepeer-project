import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import UserComponent from "../components/UserComponent";
import { auth, db } from "../firebase";

const AddChatScreen = () => {
  const [dbusers, setDBUsers] = useState([]);

  const current_user_email = auth.currentUser.email;
  useEffect(() => {
    return db.collection("users").onSnapshot((snapshot) => {
      setDBUsers(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const users = dbusers.filter((user) => user.email !== current_user_email);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ index }) => (
          <UserComponent key={index} user={users[index]} />
        )}
        keyExtractor={(user) => user.userId}
      />
    </View>
  );
};

export default AddChatScreen;
