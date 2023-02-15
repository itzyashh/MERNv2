import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Heading from "../components/Heading"
import { Avatar } from "react-native-paper"
import CartItem from "../components/CartItem"
import { testImages } from "../assets/testImages"
import { useNavigation } from "@react-navigation/native"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { useEffect } from "react"

export const cartItems = [
  {
    product: 1,
    name: "Burger",
    price: 100,
    stock: 10,
    quantity: 1,
    image: testImages[0],
  },
  {
    product: 2,
    name: "Pizza",
    price: 200,
    stock: 10,
    quantity: 2,
    image: testImages[1],
  },
]

const Cart = () => {
  const incrementHandler = (id) => {
    console.log("increment", id)
  }
  const decrementHandler = (id) => {
    console.log("decrement", id)
  }
  const navigation = useNavigation()

  return (
    <View style={[defaultStyle, { padding: 0 }]}>
      <Header back emptyCart />
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ padding: 20, paddingTop: 70, marginLeft: 35 }}
      />
      <View style={{ paddingVertical: 20, flex: 1 }}></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartItems}
        keyExtractor={(item) => item.product.toString()}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              stock={item.stock}
              img={item.image}
              index={index}
              qty={item.quantity}
              id={item.product}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          )
        }}
      />
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
      <TouchableOpacity
        onPress={() =>
          cartItems.length > 0
            ? navigation.navigate("ConfirmOrder")
            : Toast.show({
                type: "error",
                text1: "Cart is empty",
                text2: "Add some items to cart",
              })
        }
        style={styles.btn}
      >
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
