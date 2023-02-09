import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import { Avatar, Button } from "react-native-paper"
import SearchModal from "../components/searchModal"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { useNavigation } from "@react-navigation/native"
const categories = [
  { category: "Nice", _id: "asdasjkdh" },
  { category: "Nice2", _id: "asdhjasdhkj" },
  { category: "Nice3", _id: "asdasasdfsjkdh" },
  { category: "Nice4", _id: "assddasjkdh" },
  { category: "Nice5", _id: "asdsdsdasjkdh" },
  { category: "Nice6", _id: "asdasdasjkdh" },
]

const products = [
  {
    _id: "asdasdasjkdh",
    name: "Product 1",
    stock: 213,
    price: 100,
    images: [
      {
        url: "https://img.freepik.com/free-vector/cosmetics-bottles-skin-care-beauty-product-line-with-sakura-flowers-marble-table-top_33099-1559.jpg?w=1060&t=st=1675696492~exp=1675697092~hmac=83ac9a259f4a404a87e59df741fcf61567dd6ee6e4a8a0fb45c75c799e4051a5",
      },
    ],
  },

  {
    _id: "asdasasddasjkdh",
    name: "Product 2",
    stock: 213,
    price: 200,
    images: [
      {
        url: "https://img.freepik.com/free-vector/cosmetics-bottles-skin-care-beauty-product-line-with-sakura-flowers-marble-table-top_33099-1559.jpg?w=1060&t=st=1675696492~exp=1675697092~hmac=83ac9a259f4a404a87e59df741fcf61567dd6ee6e4a8a0fb45c75c799e4051a5",
      },
    ],
  },
  {
    _id: "asdasasderdasjkdh",
    name: "Product 2",
    stock: 213,
    price: 200,
    images: [
      {
        url: "https://img.freepik.com/free-vector/cosmetics-bottles-skin-care-beauty-product-line-with-sakura-flowers-marble-table-top_33099-1559.jpg?w=1060&t=st=1675696492~exp=1675697092~hmac=83ac9a259f4a404a87e59df741fcf61567dd6ee6e4a8a0fb45c75c799e4051a5",
      },
    ],
  },
]

const Home = () => {
  const [category, setCategory] = useState(categories[0]._id)
  const [activeSearch, setActiveSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigation = useNavigation()
  const categoryHandler = (id) => {
    setCategory(id)
  }
  const addToCartHandler = (id) => {}
  return (
    <>
      {activeSearch && (
        <SearchModal
          setActiveSearch={setActiveSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          products={products}
        />
      )}
      <View
        style={[
          defaultStyle,
          {
            paddingRight: 0,
          },
        ]}
      >
        <Header />
        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          {/* SearchBar */}

          <View style={{ paddingRight: 35 }}>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.white, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <FlatList
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            data={categories}
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Button
                  onPress={() => categoryHandler(item._id)}
                  style={{
                    backgroundColor:
                      category === item._id
                        ? colors.veryPeri
                        : colors.light_gray,
                    borderRadius: 100,
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: category === item._id ? colors.white : "gray",
                    }}
                  >
                    {item.category}
                  </Text>
                </Button>
              )
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              return (
                <ProductCard
                  id={item._id}
                  stock={item.stock}
                  price={item.price}
                  name={item.name}
                  image={item.images[0].url}
                  addToCartHandler={addToCartHandler}
                  i={index}
                  navigate={navigation}
                />
              )
            }}
          />
        </View>
      </View>

      <Footer activeRoute="Home" />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
