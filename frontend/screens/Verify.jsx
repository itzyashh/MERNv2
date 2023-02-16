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


  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

    let loading = false;
  const submitHandler = () => {
    console.log("submit");
    navigation.navigate('Login')
    };



  return (
    <View style={[defaultStyle]}>
        
      <Spinner  visible={loading} textContent={"Loading..."} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}> Reset Password </Text>
      </View>
      <View>
        <Text style={styles.label}>OTP</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter OTP"
          style={styles.input}
          onChangeText={(text) => setOtp(text)}
          value={otp}
        />
      
       
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter new password"
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      
       
      </View>

      <TouchableOpacity
        
        onPress={submitHandler}
        disabled={otp.length === 0 }
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <Text style={{ opacity: 0.5,fontSize:16, textAlign: "center", marginTop: 20 }}>
        back to &nbsp;
        <Text
          onPress={() => navigation.navigate("ForgetPassword")}
          style={{ color: colors.veryPeri }}
        >
          Resend OTP
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
