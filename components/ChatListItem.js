import React from "react";
import { View, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const ChatListItem = () => {
  return (
    <ListItem style={{marginVertical:1,}}>
        <Avatar source={{uri: "https://avatars.githubusercontent.com/u/52703087?v=4"}} rounded/>
      <ListItem.Content>
        <ListItem.Title>Hello</ListItem.Title>
        <ListItem.Subtitle>jadhakfkasbs</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ChatListItem;
