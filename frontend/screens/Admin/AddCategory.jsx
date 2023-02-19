import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../../styles/styles";
import Header from "../../components/Header";
import FormHeading from "../../components/miniComponents/FormHeading";
import { useState } from "react";

const AddCategory = () => {
    const [category, setCategory] = useState("");
  const loading = false;
  const onSubmit = () => {
    console.log("submitting");
    };
  const categories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
    {
      id: 4,
      name: "Category 4",
    },
    {
      id: 5,
      name: "Category 5",
    },
  ];

  return (
    <View
      style={[
        defaultStyle,
        { paddingTop: 70, backgroundColor: colors.light_gray },
      ]}
    >
      <Header back />

      <FormHeading title="Add Category" />
      <View
        style={{
          backgroundColor: colors.white,
          padding: 20,
          minHeight: 500,
          borderRadius: 10,
        }}
      >
        
        {
            loading ? <ActivityIndicator size="large" color={colors.primary} /> : (
                <>
                <View
                style={{
                }}
        
                    >
                    <TextInput
                        placeholder="Category Name"
                        value={category}
                        onChangeText={(text) => setCategory(text)}
                        onSubmitEditing={onSubmit}
                        style={{
                            backgroundColor: colors.light_gray,
                            padding: 20,
                            borderRadius: 10,
                            marginBottom: 10,
                            marginHorizontal: 10
                        }}
                    />
                   
                </View>
                <FlatList
                  data={categories}
                  renderItem={({ item }) => <CategoryCard item={item} />}
                />
                </>
            )
        }
       
      </View>
    </View>
  );
};
const CategoryCard = ({ item }) => {
  const [onHold, setOnHold] = useState(false);
  return onHold ? (
    <OnHoldCategoryCard item={item} setOnHold={()=>setOnHold(false)} />
  ) : (
    <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOnHold(!onHold)}
    >
      <View
        style={{
          backgroundColor: colors.white,
          height: 70,
          margin: 10,
          borderRadius: 10,
          marginBottom: 20,
          elevation: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
            style={{
                fontWeight:'800',
                fontSize: 20,
            }}
        >{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const OnHoldCategoryCard = ({ item,setOnHold }) => {
  return (
    <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOnHold(false)}
    >

    <View
      style={{
          backgroundColor: colors.white,
          height: 75,
          margin: 10,
        borderRadius: 10,
        marginBottom: 25,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    }}
    >
        <TouchableOpacity>

      <Text
        style={{
            color: 'red',fontWeight:'800',fontSize: 20}}      >Delete</Text>
        </TouchableOpacity>
    </View>
        </TouchableOpacity>
  );
};
export default AddCategory;
