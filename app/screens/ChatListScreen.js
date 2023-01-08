import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";

const ChatListScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Text style={styles.text} onPress={() => navigation.navigate("sChat")}>
          ChatListScreen
        </Text>
      </View>
    </AppScreen>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
