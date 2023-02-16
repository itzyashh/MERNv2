import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import { Button } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

const ForgetPassword = ({ navigation }) => {


  const [email, setEmail] = useState("");

    let loading = false;
  const submitHandler = () => {
    console.log("submit");
    navigation.navigate("Verify");
    };



  return (
    <View style={[defaultStyle]}>
        
      <Spinner  visible={loading} textContent={"Loading..."} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}> Forget Password </Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      
       
      </View>

      <TouchableOpacity
        
        onPress={submitHandler}
        disabled={email.length === 0 }
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <Text style={{ opacity: 0.5,fontSize:16, textAlign: "center", marginTop: 20 }}>
        back to &nbsp;
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{ color: colors.veryPeri }}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default ForgetPassword;

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
