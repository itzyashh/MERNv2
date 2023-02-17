import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import FormHeading from '../components/miniComponents/FormHeading'
import { Avatar } from 'react-native-paper'
import Footer from '../components/Footer'
import Spinner from 'react-native-loading-spinner-overlay/lib'

const user = {
    name: "John Doe",
    email: "john@example",
    city: "New York",
    state: "New York",
    country: "USA",
    address: "123, Main Street",
    pincode: "123456",
}

const loading = false

const Profile = ({navigation}) => {

    const logoutHandler = () => {
        console.log("logout")
    }

    const navigateHandler = (text) => {
        switch (text) {
           case 'Admin':
            navigation.navigate('AdminPanel')
            break;
            case 'Orders':
                navigation.navigate('Orders')
                break;
            case 'Profile':
                navigation.navigate('UpdateProfile')
                break;
            case 'Password':
                navigation.navigate('ChangePassword')
                break;
            case 'Log out':
                logoutHandler()
                break;
            default:
                navigation.navigate('Orders')
                break;

    }}

    
  return (

    <>
    {loading &&  <Spinner size='large' color={colors.veryPeri}
       visible={loading} textContent={"Loading..."} />}
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
                marginTop:20,
                justifyContent:"space-between",
        }}
        >
            <ButtonBox handler={navigateHandler} icon='order-bool-descending' text={'Orders'}  />
            <ButtonBox handler={navigateHandler} reverse icon='security' text={'Admin'} />
            <ButtonBox handler={navigateHandler} icon='pencil-outline' text={'Profile'} />
        </View>
        <View
        style={{flexDirection:'row',
                margin:10,
                marginTop:20,
                justifyContent:"space-evenly",
        }}
        >
            <ButtonBox handler={navigateHandler} icon='pencil' text={'Password'}  />
            <ButtonBox handler={navigateHandler} icon='exit-to-app' text={'Log out'} />
        </View>
    </View>
    <Footer />
    </>
  )
}

const ButtonBox = ({icon,text,handler,reverse=false,loading=false}) => {
    return (
        <TouchableOpacity onPress={() =>handler(text)} disabled={loading} style={{ justifyContent:'space-around' ,backgroundColor:reverse?colors.veryPeri:colors.color3,height:74,width:74,borderRadius:5,alignItems: 'center',}}>
            <Avatar.Icon size={50} icon={icon} style={{top:-7,alignSelf:"center",backgroundColor:colors.transparent,marginTop:10}} />
            <Text  style={{top:-6,textAlign:"center",color:colors.white}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    }
})