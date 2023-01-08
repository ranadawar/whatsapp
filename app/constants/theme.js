export const COLORS = {
  //whatsapp color scheme
  primary: "#075E54",
  secondary: "#128C7E",
  tertiary: "#25D366",
  white: "#fff",
  lightGray: "#f5f5f5",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  boldItalic: "InterBoldItalic",
  semiBold: "InterSemiBold",
  semiBoldItalic: "InterSemiBoldItalic",
  medium: "InterMedium",
  mediumItalic: "InterMediumItalic",
  regular: "InterRegular",
  regularItalic: "InterRegularItalic",
  light: "InterLight",
  lightItalic: "InterLightItalic",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
