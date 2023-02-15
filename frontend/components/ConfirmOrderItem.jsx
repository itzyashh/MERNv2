import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"

const ConfirmOrderItem = ({ item }) => {
  const { name, price } = item
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Image
        source={{
          uri: item.image,
        }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <Text>{name}</Text>
      <Text>|</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{item.quantity}</Text>
        <Text style={{ marginHorizontal: 10 }}>x</Text>
        <Text>{price}</Text>
      </View>
    </View>
  )
}

export default ConfirmOrderItem

const styles = StyleSheet.create({})
