import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Carousel from "react-native-snap-carousel"
import { faker } from "@faker-js/faker"
import { Avatar, Button } from "react-native-paper"
import { Toast } from "react-native-toast-message/lib/src/Toast"
const { width } = Dimensions.get("window")

const iconOptions = {
  size: 25,
  style: {
    borderRadius: 5,
    backgroundColor: colors.light_gray,
    width: 25,
    height: 25,
  },
}

const ProductDetails = ({ route }) => {
  const [quantity, setQuantity] = React.useState(1)
  const [btnDisabled, setBtnDisabled] = React.useState(false)

  const ProductDetailsProps = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    stock: 20,
  }
  console.log(faker.datatype.uuid())
  const images = [
    {
      id: faker.datatype.uuid(),

      url: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.7.0/png/iconmonstr-reload-lined.png&r=255&g=15&b=23",
    },
    {
      id: faker.datatype.uuid(),
      url: faker.image.imageUrl(640, 480, "product"),
    },
  ]
  const { id } = route.params
  const carouselRef = React.useRef(null)
  console.log(id)

  const decrementQty = () => quantity > 1 && setQuantity(quantity - 1)

  const incrementQty = () =>
    ProductDetailsProps.stock > quantity && setQuantity(quantity + 1)

  const addToCartHandler = () => {
    ProductDetailsProps.stock === 0 &&
      Toast.show({
        type: "error",
        text1: "Out of stock",
        text2: "Sorry, this product is out of stock",
      })
    Toast.show({
      type: "success",
      text1: "Added to cart",
      text2: "This product has been added to your cart",
    })
  }

  return (
    <View
      style={[defaultStyle, { backgroundColor: colors.veryPeri, padding: 0 }]}
    >
      <Header back />
      <Carousel
        keyExtractor={(item) => item.id}
        data={images}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        ref={carouselRef}
      />
      <View
        style={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          flex: 100,
          padding: 35,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 22, fontWeight: "400" }}>
          {ProductDetailsProps.name}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "900" }}>
          ₹{ProductDetailsProps.price}
        </Text>
        <Text
          numberOfLines={8}
          style={{ letterSpacing: 1, marginVertical: 15, lineHeight: 20 }}
        >
          {ProductDetailsProps.description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon="minus" {...iconOptions} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon="plus" {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={addToCartHandler}
          activeOpacity={0.8}
          style={styles.btn}
        >
          <Avatar.Icon size={50} icon="cart" style={styles.btnIcon} />
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingVertical: 40,
  },
  image: { width: width, resizeMode: "contain", height: 250 },
  quantity: {
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light_gray,
  },
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
  btnIcon: {
    backgroundColor: colors.transparent,
  },
})
