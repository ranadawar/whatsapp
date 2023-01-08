import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";

const ChatScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <AppHeader icon="chevron-left" title="Chat" />
      <View style={styles.mainContainer}>
        <Text onPress={() => navigation.navigate("inbox")}>ChatsScreen</Text>
      </View>
    </AppScreen>
  );
};
const MyRight = () => {
  return <Text>Hello</Text>;
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
