import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

const SignUp = ({ navigation }) => {


  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [password, setPassword] = useState("");

  let disabledBtn = !email || !password || !name || !city || !state || !country || !address || !pincode;

    let loading = false;
  const submitHandler = () => {
    console.log("submit");
    navigation.navigate('Verify')
    };



  return (
      <>
    <View style={[defaultStyle]}>
        
      <Spinner  visible={loading} textContent={"Loading..."} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}>Sign Up </Text>
      </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ elevation:3,borderRadius:10,backgroundColor:colors.white, padding: 20 }}
    >
    <View>
      <Avatar.Image size={100}  source={require("../assets/profileIcon.png")} style={{alignSelf:"center",backgroundColor:colors.transparent}} />
      <TouchableOpacity
        onPress={navigation.navigate("Camera")}
      >
        <Text style={{ textAlign: "center", color: colors.veryPeri,marginVertical:10,fontSize:15 }}>Change Photo</Text>
      </TouchableOpacity>
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
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
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
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{ opacity: 0.8, textAlign: "center", marginTop: 20 }}>
        Already have an account?
        &nbsp;
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={{ color: colors.veryPeri }}
        >
        Login
        </Text>
      </Text>
    </View>
        </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  heading: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: "500",
    color: colors.veryPeri,
    marginBottom: 10,
  },
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
