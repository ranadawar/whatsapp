import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const AppHeader = ({
  icon = "chevron-left",
  iconSize = 25,
  iconColor = COLORS.tertiary,
  title,
  onPressIcon = () => {},
  leftContainerStyle,
  titleStyle,
  rightText,
  rightTextStyle,
  rightIcon,
  rightIconSize = 25,
  rightIconColor = COLORS.white,
  onPressRight = () => {},
  rightContainerStyle,
  rightImage,
  rightImageStyle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.leftContainer, leftContainerStyle]}>
        {icon && (
          <TouchableOpacity style={styles.iconContainer} onPress={onPressIcon}>
            <MaterialCommunityIcons
              name={icon}
              size={iconSize}
              color={iconColor}
            />
          </TouchableOpacity>
        )}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      </View>
      {rightText && (
        <TouchableOpacity style={rightContainerStyle} onPress={onPressRight}>
          <Text>{rightText}</Text>
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity style={rightContainerStyle} onPress={onPressRight}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={rightIconSize}
            color={rightIconColor}
          />
        </TouchableOpacity>
      )}
      {rightImage && (
        <TouchableOpacity style={rightContainerStyle} onPress={onPressRight}>
          <Image
            resizeMode="contain"
            source={rightImage}
            style={rightImageStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  iconContainer: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.tertiary,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
