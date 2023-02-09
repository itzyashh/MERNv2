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
import { Avatar } from "react-native-paper"
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

  const ProductDetailsProps = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    stock: 2,
  }
  console.log(faker.datatype.uuid())
  const images = [
    {
      id: faker.datatype.uuid(),

      url: 'faker.image.imageUrl(640, 480, "product")',
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
})
