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
    price: 100,
    images: [
      { url: "https://cdn.create.vista.com/api/media/308804920/medium" },
    ],
  },
  {
    _id: "asdassddasjkdh",
    name: "Product 1",
    price: 100,
    images: [
      { url: "https://cdn.create.vista.com/api/media/308804920/medium" },
    ],
  },
]

const Home = () => {
  const [category, setCategory] = useState(categories[0]._id)
  const [activeSearch, setActiveSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const categoryHandler = (id) => {
    setCategory(id)
  }
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
      <View style={defaultStyle}>
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

          <View>
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
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
