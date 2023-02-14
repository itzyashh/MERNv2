import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import { defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Heading from "../components/Heading"
import ConfirmOrderItem from "../components/ConfirmOrderItem"
import { cartItems } from "./Cart"

const ConfirmOrder = () => {
  return (
    <View style={[defaultStyle]}>
      <Header back />
      <Heading
        text1="Confirm"
        text2="Order"
        containerStyle={{ paddingTop: 70 }}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={(item) => item.product.toString()}
          renderItem={({ item, index }) => {
            return <ConfirmOrderItem />
          }}
        />
      </View>
    </View>
  )
}

export default ConfirmOrder

const styles = StyleSheet.create({})
