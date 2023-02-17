import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import FormHeading from '../components/miniComponents/FormHeading'
import { Avatar } from 'react-native-paper'

const user = {
    name: "John Doe",
    email: "john@example",
    city: "New York",
    state: "New York",
    country: "USA",
    address: "123, Main Street",
    pincode: "123456",
}

const Profile = () => {
  return (
    <View style={defaultStyle} >
        <View
        style={styles.container}
        >
            <Avatar.Image size={100}  source={require("../assets/profileIcon.png")} style={{alignSelf:"center",backgroundColor:colors.transparent}} />
            <Text style={{ textAlign: "center", color: colors.veryPeri,marginVertical:10,fontSize:15 }}>Change Photo</Text>
            
                <Text style={{fontSize:20,
                fontWeight:"bold",
                }}>{user.name}</Text>
               <Text style={{fontSize:15,fontWeight:"300",}}>{user.email}</Text>
        </View>
        <View
        style={{flexDirection:'row',
                margin:10,
                justifyContent:"space-between",
        }}
        >

        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    }
})