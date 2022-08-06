import React, { useEffect, useLayoutEffect, useState } from "react";
import { Keyboard } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "react-native-vector-icons";
import { TouchableWithoutFeedback } from "react-native-web";
import firebase from "firebase";
import { db } from "../firebase";

const UserChatScreen = ({ navigation, route }) => {
  const { chatId, data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.users[1],
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
  const [messages,setMessages] = useState([]);

  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection("chats").doc(chatId).collection("messages").add({
      message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      sender: data.users[0],
      reciever: data.users[1],
    }); 
    console.log(message); 
    setMessage("");
  };

 useEffect(() => {
   const unsubscribe = db.collection("chats").doc(chatId).collection("messages").onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()));
    return unsubscribe;
  });
 })

//  console.log(messages);


  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
          <>
            <ScrollView>
              {/* {messages?.map((message, index) => {
                <View key={index} style={{width:60,height:40,backgroundColor:'white'}}>
                  <Text key={index} style={{color:'black'}}>{message?.message}</Text>
                </View>
              })} */}
              <Text> messages</Text>
            </ScrollView> 
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 40,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 5,
                bottom: 0,
                marginBottom: 10,
              }}
            >
              <MaterialIcons name="keyboard" size={24} color="black" />

              <TextInput
                placeholder="Type a message"
                style={{
                  flex: 1,
                  color: "black",
                  backgroundColor: "#ECECEC",
                  borderColor: "transparent",
                  padding: 10,
                  borderRadius: 16,
                  marginHorizontal: 4,
                }}
                value={message}
                onChangeText={(val) => setMessage(val)}
                onSubmitEditing={sendMessage}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: "#1fa63f",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={sendMessage}
              >
                <MaterialIcons name="send" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default UserChatScreen;
