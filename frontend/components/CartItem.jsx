import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React from "react"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import { iconOptions } from "../screens/ProductDetails"

const CartItem = ({
  key,
  name,
  price,
  stock,
  img,
  index,
  qty,
  id,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 == 0 ? colors.veryPeri : colors.color3,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 17 }}>{name}</Text>
        <Text style={{ fontSize: 17, fontWeight: "900" }}>₹{price}</Text>
      </View>
      <View
        style={{ height: 80, width: "20%", justifyContent: "space-between" }}
      >
        <TouchableOpacity onPress={() => decrementHandler(id)}>
          <Avatar.Icon icon="minus" {...iconOptions} />
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: colors.transparent,
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 5,
            width: 25,
            height: 25,
            textAlignVertical: "center",
            borderColor: colors.light_gray,
          }}
        >
          {qty}
        </Text>
        <TouchableOpacity onPress={() => incrementHandler(id)}>
          <Avatar.Icon icon="plus" {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
})
