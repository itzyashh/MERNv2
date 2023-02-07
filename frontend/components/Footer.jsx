import { View, TouchableOpacity } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"

const Footer = ({ activeRoute }) => {
  const navigate = useNavigation()

  const isAuth = false

  const loading = false
  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("Home")
        break
      case 1:
        navigate.navigate("Cart")
        break
      case 2:
        if (isAuth) {
          navigate.navigate("Profile")
        } else {
          navigate.navigate("Login")
        }
        break
      default:
        navigate.navigate("Home")
        break
    }
  }

  return (
    loading && (
      <View style={{ backgroundColor: colors.veryPeri }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigationHandler(1)}
          >
            <Avatar.Icon
              style={{ backgroundColor: colors.veryPeri }}
              icon={activeRoute === "Cart" ? "shopping" : "shopping-outline"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigationHandler(2)}
          >
            <Avatar.Icon
              style={{ backgroundColor: colors.veryPeri }}
              icon={activeRoute === "Cart" ? "account" : "account-outline"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: 100,
            top: -50,
            alignSelf: "center",
            backgroundColor: colors.white,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigationHandler(3)}
          >
            <Avatar.Icon
              style={{ backgroundColor: colors.veryPeri }}
              icon={activeRoute === "Home" ? "home" : "home-outline"}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  )
}

export default Footer
