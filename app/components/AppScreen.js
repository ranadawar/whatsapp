import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const AppScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="default" />
      {children}
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
