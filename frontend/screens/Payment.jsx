import {  StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import React from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Heading from "../components/Heading"
import { Button, RadioButton } from "react-native-paper"

const Payment = ({ navigation, route }) => {
    const [paymentMethod, setPaymentMethod] = React.useState("COD")
    const isAuth = false
    const redirectToLogin = () => {
        navigation.navigate("Login")
    }
    const codHandler = () => {}
    const onlineHandler = () => {}

    console.log(paymentMethod)
  return (
    <View style={defaultStyle}>
      <Header back />
      <Heading text1="Payment" text2="Method" containerStyle={{paddingTop:70}} />
      <View
        style={styles.container}
      >
        <RadioButton.Group
            onValueChange={newValue => setPaymentMethod(newValue)}
            value={paymentMethod}
        >
            <View style={styles.radioStyle}>
                <Text style={styles.radioStyleText}>Cash on Delivery</Text>
                <RadioButton color={colors.veryPeri} value={"COD"} />
            </View>
            <View style={styles.radioStyle}>
                <Text style={styles.radioStyleText}>Pay Online</Text>
                <RadioButton color={colors.veryPeri} value={"ONLINE"} />
            </View>
        </RadioButton.Group>

      </View>
      <TouchableOpacity
        onPress={() => !isAuth?redirectToLogin():paymentMethod==="COD"?codHandler():onlineHandler()}
      >
        <Button textColor={colors.white} style={styles.btn} >Continue</Button>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.color3,
        padding:20,
        borderRadius:20,
        marginVertical:20,
        justifyContent:"center",
        flex:1
    },
    radioStyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:5
    },
    radioStyleText:{
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:'600',
        color:colors.white
    },
    btn:{
        backgroundColor:colors.color3,
        padding:5,
        margin:10,
        borderRadius:50,
        
    }

})
