import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Heading from "../components/Heading"
import { Avatar } from "react-native-paper"

const Cart = () => {
  return (
    <View style={[defaultStyle, { padding: 0 }]}>
      <Header back emptyCart={true} />
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ padding: 20, paddingTop: 70, marginLeft: 35 }}
      />
      <View style={{ paddingVertical: 20, flex: 1 }}></View>
      <View
        style={{
          paddingHorizontal: 35,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>5 Items</Text>
        <Text>₹5</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Avatar.Icon
          size={50}
          icon="cart"
          style={{ backgroundColor: colors.transparent }}
        />
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: colors.color3,
    paddingVertical: 5,
    borderRadius: 50,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
})
