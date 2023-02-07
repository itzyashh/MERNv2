import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { colors } from "../styles/styles"

const ProductCard = ({
  id,
  stock,
  price,
  name,
  image,
  addToCartHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate.navigate("ProductDetails", { id })}
    >
      <View
        style={{
          elevation: 15,
          width: 250,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          height: 400,
          borderRadius: 20,
          backgroundColor: i % 2 === 0 ? colors.veryPeri : colors.white,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            top: 105,
            left: 40,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            justifyContent: "space-between",
            padding: 20,
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: i % 2 === 0 ? colors.white : colors.color3,
              fontSize: 25,
              fontWeight: "300",
            }}
            numberOfLines={2}
          >
            {name}
          </Text>
          <Text
            style={{
              color: i % 2 === 0 ? colors.white : colors.color3,
              fontSize: 25,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => addToCartHandler(id, stock)}
          style={{
            backgroundColor: i % 2 === 0 ? colors.white : colors.color3,
            borderRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              padding: 15,
              fontWeight: "800",
              color: i % 2 === 0 ? colors.veryPeri : colors.white,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({})
