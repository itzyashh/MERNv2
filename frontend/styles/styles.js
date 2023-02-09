import { Platform, StatusBar, StyleSheet } from "react-native"

export const colors = {
  veryPeri: "#6667AB",
  peri: "#7F7FFF",
  color1_light: "rgba(227,25,99,1)",
  color1_light2: "rgba(199,0,73,0.8)",
  white: "white",
  color3: "rgb(45,45,45)",
  transparent: "transparent",
  light_gray: "#f2f2f2",
  light_gray_dark: "#f7f7f7",
}

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.white,
})
export const inputStyle = StyleSheet.create({
  height: 50,
  marginVertical: 10,
  marginHorizontal: 20,
  backgroundColor: colors.white,
})
