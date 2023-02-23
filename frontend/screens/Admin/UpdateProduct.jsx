import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../../styles/styles";
import FormHeading from "../../components/miniComponents/FormHeading";
import Header from "../../components/Header";
import { Button } from "react-native-paper";
import { useState } from "react";
import SelectComponent from "../../components/SelectComponent";
const { height, width } = Dimensions.get("window");

const UpdateProduct = ({ route, navigation }) => {
  const loading = false;
  const  loadingOther = false;
  const [id] = useState(route.params?.id);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState('Laptop');
  const [stock, setStock] = useState();
  const [categoryID, setCategoryID] = useState();
  const [categories, setCategories] = useState([
    { 
      _id: 1, category: "Laptop" },
    { 
      _id: 2, category: "Mobile" },
    { 
      _id: 3, category: "Tablet" },
    { 
      _id: 4, category: "Camera" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log("submit");
  };


  return (
    <>
    <View style={defaultStyle}>
      <Header back />
      <View style={{ paddingTop: 40, flex: 0 }}>
        <FormHeading title="Update Product" />
      </View>
      <View>
        {loading ? (
          <>
            <Text>Loading...</Text>
            <ActivityIndicator size={"small"} />
          </>
        ) : (
          <>
            <ScrollView
              style={{
                padding: 20,
                elevation: 5,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  height: height * 0.65,
                  justifyContent: "center",
                }}
              >
                <Button
                  onPress={() => {
                    navigation.navigate("ProductImages", {
                      id,
                      images: [],
                    });
                  }}
                  textColor={colors.veryPeri}
                >
                  Manage Product Images
                </Button>
                <TextInput
                  placeholder="Name"
                  style={styles.input}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
                <TextInput
                  placeholder="Description"
                  style={styles.input}
                  onChangeText={(text) => setDescription(text)}
                  value={description}
                />
                <TextInput
                  placeholder="Price"
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={(text) => setPrice(text)}
                  value={price}
                />
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={(text) => setStock(text)}
                  value={stock}
                  placeholder="Stock"
                />
                <Text
                  onPress={() => setVisible(true)}
                  style={[styles.input,{textAlign:'center',borderRadius:3}]}
                >{category}</Text>
                <Button
                style={{marginTop:10,
                backgroundColor:colors.veryPeri,
                borderRadius:25,
                padding:10,                  
                }}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
                textColor={colors.white}
                >Update</Button> 
              </View>

            </ScrollView>
          </>
        )}
      </View>
    </View>
    <SelectComponent 
    visible={visible}
    setVisible={setVisible}
    setCategory={setCategory}
    setCategoryID={setCategoryID}
    categories={categories}

    />
    </>
  );
};

export default UpdateProduct;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.light_gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
