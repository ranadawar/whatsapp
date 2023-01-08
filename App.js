import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Bold.ttf"),
    InterBoldItalic: require("./assets/fonts/BoldItalic.ttf"),
    InterSemiBold: require("./assets/fonts/SemiBold.ttf"),
    InterSemiBoldItalic: require("./assets/fonts/SemiBoldItalic.ttf"),
    InterMedium: require("./assets/fonts/Medium.ttf"),
    InterMediumItalic: require("./assets/fonts/MediumItalic.ttf"),
    InterRegular: require("./assets/fonts/Regular.ttf"),
    InterRegularItalic: require("./assets/fonts/Italic.ttf"),
    InterLight: require("./assets/fonts/Light.ttf"),
    InterLightItalic: require("./assets/fonts/LightItalic.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
