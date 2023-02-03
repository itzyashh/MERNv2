import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native"
import React from "react"

const Main = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <Text>Main</Text>
      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({})
