import {
  BackHandler,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../styles/styles"
import { Headline, Searchbar } from "react-native-paper"

const SearchModal = ({
  setActiveSearch,
  searchQuery,
  setSearchQuery,
  products,
}) => {
  const navigate = useNavigation()
  const backAction = () => {
    setSearchQuery("")
    setActiveSearch(false)
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction)
    }
  }, [])

  return (
    <View
      style={{
        width: "100%",
        height: "100%", // position: "absolute",top: 0,

        zIndex: 100,
        backgroundColor: colors.white,
        padding: 35,
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
      }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={{
          marginTop: 20,
        }}
      />
      <FlatList
        contentContainerStyle={{
          paddingVertical: 40,
          paddingHorizontal: 10,
        }}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <SearchItem
              price={item.price}
              name={item.name}
              imgSrc={item.images[0].url}
              handler={() =>
                navigate.navigate("ProductDetails", { id: item._id })
              }
            />
          )
        }}
      />
    </View>
  )
}

const SearchItem = ({ price, name, imgSrc, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.white,
          elevation: 5,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            top: -10,
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View style={{ width: "80%", paddingHorizontal: 30 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline
            numberOfLines={1}
            style={{
              fontWeight: "900",
            }}
          >
            ₹{price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SearchModal

const styles = StyleSheet.create({})
