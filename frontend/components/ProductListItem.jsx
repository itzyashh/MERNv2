import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const ProductListItem = ({ item, index }) => {
    const [onHold, setOnHold] = React.useState(false);

    const deleteHandler = (id) => {
        console.log("deleting product with id: ", id);
    };

  return (
    <TouchableOpacity
        onLongPress={() => setOnHold(!onHold)} >
            {
                onHold ? <OnHoldProduct id={item._id} deleteHandler={() => deleteHandler(item._id)} /> : (
                    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: colors.light_gray_dark,
        padding: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
      }}
    >
      <Image
        style={{ width: 45, height: 45, borderRadius: 10, marginLeft: 10 }}
        source={{ uri: item.images[0].url }}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingLeft: 10,
        }}
      >
        <Text
        
        numberOfLines={2}
          style={{
            position:'absolute',
            left:42,
            fontSize: 12,
            width: 30,
        }}
        >
          ₹{item.price}
        </Text>
        <Text
            numberOfLines={2}
          style={{
            position:'absolute',
            left:105,
            width: 80,

        }}
        >
          {item.name}
        </Text>
        <Text
        
        numberOfLines={2}
            style={{
                position:'absolute',
                right:35,
                fontSize: 12,
                width: 80,
            }}
        >{item.category}</Text>
        <Text
        
        numberOfLines={2}
          style={{
            
                position:'absolute',
                right:5,
                width: 40,
            color:
              item.stock > 300 ? "green" : item.stock > 100 ? "orange" : "red",
          }}
        >
          {item.stock}
        </Text>
      </View>
    </View>
                )
            }
       
      </TouchableOpacity>
  );
};

export const OnHoldProduct = ({deleteHandler,id}) => {
    const navigation = useNavigation()
    console.log(id)
    return (<>
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 15,
          backgroundColor: colors.light_gray_dark,
          padding: 12,
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 65,
        }}
      >
        <TouchableOpacity
        onPress={() => navigation.navigate('UpdateProduct',{id})}
        >
            <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={deleteHandler}
        >
            <Text
            style={{color:'red',
            fontSize: 16,


        }}
            >Delete</Text>
        </TouchableOpacity>
        
      </View>
        <Text style={{alignSelf:'center',fontSize: 8,marginTop:5,color:'gray'}} >Tap and hold to dismiss</Text>
        </>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
  headingText: {
    marginLeft: 40,
  },
});
