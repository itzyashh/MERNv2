import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Heading from "../components/Heading"
import ConfirmOrderItem from "../components/ConfirmOrderItem"
import { cartItems } from "./Cart"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native-paper"

const ConfirmOrder = () => {
  const priceDetails = {
    price: 4000,
    discount: 100,
    delivery: 50,
  }
  let tax = priceDetails.price * (0.18).toFixed(2)
  let total =
    priceDetails.price + tax + priceDetails.delivery - priceDetails.discount

  console.log(total)
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
            return <ConfirmOrderItem item={item} />
          }}
        />
      </View>
      <PriceTag
        price={priceDetails.price}
        tax={tax}
        total={total}
        discount={priceDetails.discount}
        delivery={priceDetails.delivery}
      />
      <TouchableOpacity
        onPress={() =>
          useNavigation.navigate("Payment", {
            total: total,
            tax: tax,
            delivery: priceDetails.delivery,
            discount: priceDetails.discount,
            price: priceDetails.price,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 50,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.white}
          icon="credit-card"
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const PriceTag = ({ price, tax, discount, total, delivery }) => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.heading}>Price</Text>
        <Text style={styles.heading2}> ₹{price}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.heading}>Discount</Text>
        <Text style={[styles.heading2, { color: "#195300" }]}>₹{discount}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.heading]}>Delivery</Text>

        <Text style={[styles.heading2, { color: "#380000" }]}>₹{delivery}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.heading}>Tax</Text>
        <Text style={[styles.heading2, { color: "#7f4300" }]}>₹{tax}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.heading}>Total</Text>
        <Text style={styles.heading2}>₹{total}</Text>
      </View>
    </View>
  )
}

export default ConfirmOrder

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "800",
  },
  heading2: {},
})
