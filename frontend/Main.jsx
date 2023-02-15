import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import ProductDetails from "./screens/ProductDetails"
import Toast from "react-native-toast-message"
import Cart from "./screens/Cart"
import ConfirmOrder from "./screens/ConfirmOrder"
import Payment from "./screens/Payment"
import Login from "./screens/Login"
import Spinner from "react-native-loading-spinner-overlay"
import ForgetPassword from "./screens/ForgetPassword"

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" topOffset={50} visibilityTime={1700} />
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})
