import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../components/Header";
import FormHeading from "../components/miniComponents/FormHeading";
import { colors, defaultStyle } from "../styles/styles";
  
  const UpdateProfile = ({ navigation }) => {
  
  
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
  
    let disabledBtn = !email  || !name || !city || !state || !country || !address || !pincode;
  
      let loading = false;
    const submitHandler = () => {
      console.log("submit");
      };
  
  
  
    return (
        <>
        <Header back />
      <View style={[defaultStyle,{paddingTop:70}]}>
          
        <Spinner  visible={loading} textContent={"Loading..."} />
        <FormHeading  title="Edit Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ elevation:3,borderRadius:10,backgroundColor:colors.white, padding: 20 ,flexGrow:0}}
      >
      <View>
        
          <TextInput
            placeholder="Name: e.g. John Doe"
            autoCapitalize="words"
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
        
          <TextInput
            autoCapitalize="words"
            placeholder="Address"
            style={styles.input}
            onChangeText={(text) => setAddress(text)}
            value={address}
            />
          <TextInput
            autoCapitalize="words"
            placeholder="City"
            style={styles.input}
            onChangeText={(text) => setCity(text)}
            value={city}
          />
          <TextInput
            autoCapitalize="words"
  
            placeholder="State"
            style={styles.input}
            onChangeText={(text) => setState(text)} 
            value={state}
          />
          <TextInput
            autoCapitalize="words"
            autoCorrect
            
            placeholder="Country"
            style={styles.input}
            onChangeText={(text) => setCountry(text)}
            value={country}
            />
          <TextInput
            placeholder="Pincode"
            style={[styles.input]}
            onChangeText={(text) => setPincode(text)}
            value={pincode}
          />
  
          
        </View>
        <View
          style={{
            height: 20,
          }}
        ></View>
      </ScrollView>
        <TouchableOpacity
          
          onPress={submitHandler}
          disabled={disabledBtn}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <Text style={{ opacity: 0.8, textAlign: "center", marginTop: 20 }}>
        head back to
        &nbsp;
        <Text
          onPress={() => navigation.navigate("Profile")}
          style={{ color: colors.veryPeri }}
        >
        Dashboard
        </Text>
        </Text>
      </View>
          </>
    );
  };
  
  
  const styles = StyleSheet.create({
   
    label: {
      fontSize: 16,
      fontWeight: "400",
  
      marginBottom: 10,
    },
    img: {
      alignSelf: "center",
      width: 250,
      height: 250,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: colors.light_gray,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: colors.veryPeri,
      borderRadius: 5,
      padding: 10,
      marginTop: 20,
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
    },
  });
  
export default UpdateProfile
