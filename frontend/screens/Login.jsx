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

const Login = ({ navigation }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    let loading = false;
  const submitHandler = () => {
    console.log("submit");
    navigation.navigate('Verify')
    };



  return (
    <View style={[defaultStyle]}>
        
      <Spinner  visible={loading} textContent={"Loading..."} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}> Login </Text>
      </View>
      <Image source={require("../assets/loginLogo.png")} style={styles.img} />
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text
          onPress={() => navigation.navigate("ForgetPassword")}
          style={{ textAlign: "right", opacity: 0.5 }}
        >
          Forgot Password?
        </Text>
      </View>

      <TouchableOpacity
        
        onPress={submitHandler}
        disabled={email.length === 0 || password.length === 0}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{ opacity: 0.5, textAlign: "center", marginTop: 20 }}>
        Don't have an account ? &nbsp;
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={{ color: colors.veryPeri }}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Login;

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
