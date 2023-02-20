import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyle } from "../../styles/styles";
import FormHeading from "../../components/miniComponents/FormHeading";
import Header from "../../components/Header";

const UpdateProduct = () => {
  return (
    <View style={defaultStyle}>
      <Header back />
      <View style={{ paddingTop: 40 }}>
        <FormHeading title="Update Order" />
        </View>
    </View>
  );
};

export default UpdateProduct;

const styles = StyleSheet.create({});
