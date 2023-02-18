import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../components/Header";
import { colors, defaultStyle } from "../styles/styles";
  
  const ChangePassword = ({ navigation }) => {
  
  
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
  
      let loading = false;
    const submitHandler = () => {
      console.log("submit");
      };
  
  
  
    return (
      <View style={[defaultStyle]}>
          <Header back  />
        <Spinner  visible={loading} textContent={"Loading..."} />
        <View style={{ marginBottom: 20 ,paddingTop:70}}>
          <Text style={styles.heading}> Change Password </Text>
        </View>
        
        <View>
     
          <TextInput
            placeholder="Old Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setOldPassword(text)}
            value={oldPassword}
          />
          <TextInput
            placeholder="New Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
          />
       
        </View>
  
        <TouchableOpacity
          
          onPress={submitHandler}
          disabled={ oldPassword.length === 0
            || newPassword.length === 0}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      
      </View>
    );
  };
  
  export default ChangePassword;
  
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
  