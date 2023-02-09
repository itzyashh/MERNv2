import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Avatar } from "react-native-paper"
import { colors } from "../styles/styles"
import { useNavigation, useRoute } from "@react-navigation/native"

const Header = ({ back, emptyCart = false }) => {
  const navigation = useNavigation()
  const route = useRoute()
  const emptyCartHandler = () => {
    console.log("empty cart")
  }
  return (
    <>
      {back && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", zIndex: 10, top: 40, left: 20 }}
        >
          <Avatar.Icon
            style={{ backgroundColor: "transparent" }}
            icon={"arrow-left"}
            color={
              route.name === "ProductDetails" ? colors.white : colors.color3
            }
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={
          emptyCart ? emptyCartHandler : () => navigation.navigate("Cart")
        }
        style={{ position: "absolute", zIndex: 10, top: 40, right: 20 }}
      >
        <Avatar.Icon
          style={{ backgroundColor: "transparent" }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={route.name === "ProductDetails" ? colors.white : colors.color3}
        />
      </TouchableOpacity>
    </>
  )
}

export default Header
