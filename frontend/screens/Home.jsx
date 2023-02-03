import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import { Avatar } from "react-native-paper"

const Home = () => {
  return (
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
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.white, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      ></View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
