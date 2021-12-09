import React from "react";
import { View, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const ChatListItem = ({ id, users }) => {
  return (
    <ListItem bottomDivider={true}>
      {/* <Avatar
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUGQhLJ57tmVnMl3X8066MDXMtAW2DkImgcuqhxL5esZPkZ8Cz0Y-hmcLP12LQyB7HNY&usqp=CAU",
        }}
        rounded
      /> */}
      <ListItem.Content>
        <ListItem.Title>{users[1]}</ListItem.Title>
        <ListItem.Subtitle>jadhakfkasbs</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ChatListItem;
