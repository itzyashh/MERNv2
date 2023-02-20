import { View, Text, ActivityIndicator, FlatList, Image, Touchable, TouchableOpacity } from "react-native";
import { colors, defaultStyle } from "../../styles/styles";
import Header from "../../components/Header";
import FormHeading from "../../components/miniComponents/FormHeading";
import { useState } from "react";

const orders = [
  {
    _id: 1,
    shippingAddress: {
      address: "1234 Main St",
      city: "New York City",
      country: "USA",
      pincode: "123456",
      state: "New York",
    },
    createdAt: "2021-07-01T12:00:00.000Z",
    paymentMethod: "PayPal",
    orderStatus: "Delivered",
    totalAmount: 100,
  },
  {
    _id: 2,
    shippingAddress: {
      address: "1234 Main St",
      city: "New York City",
      country: "USA",
      pincode: "123456",
      state: "New York",
    },
    createdAt: "2021-07-01T12:00:00.000Z",
    paymentMethod: "PayPal",
    orderStatus: "Delivered",
    totalAmount: 100,
  },
];

const AdminOrders = () => {
  const loading = false;
  const [readMore, setReadMore] = useState(false);
  const updateHandler = (id) => {
    console.log(id);
    };
  return (
    <View style={[defaultStyle, { backgroundColor: colors.light_gray }]}>
      <Header back />
      <View style={{ paddingTop: 40 }}>
        <FormHeading title="Orders" />
        <View>
          {
            orders.length === 0 ? (
                <View style={{alignItems:"center",justifyContent:"center",height:300}}>
                   <Image source={{
                        uri: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-inbox-14.png&r=0&g=0&b=0'
                   }} style={{height:200,width:200}} />
                    <Text style={{fontSize:20,fontWeight:"bold",color:'black'}}>No Orders</Text>
                </View>
            ) :
          loading ? (
            <ActivityIndicator size="large" color={colors.veryPeri} />
          ) : (
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      backgroundColor: colors.white,
                      borderRadius: 10,
                      marginVertical: 10,
                      padding: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text style={{ fontWeight: "bold" }}>
                          Order Id: {item._id}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          {item.createdAt.substring(0, 10)}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            color: item.orderStatus === "Delivered" && "lime",
                          }}
                        >
                          {item.orderStatus}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <View>
                        <Text style={{ fontSize: 12 }}>
                          {item.shippingAddress.address},
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          {item.shippingAddress.city},
                        </Text>
                        {!readMore && (
                          <Text
                            onPress={() => {
                              setReadMore(!readMore);
                            }}
                            style={{ fontSize: 12, color: "gray" }}
                          >
                            read more.. ◿
                          </Text>
                        )}

                        {readMore && (
                          <View>
                            <Text style={{ fontSize: 12 }}>
                              {item.shippingAddress.state},
                            </Text>
                            <Text style={{ fontSize: 12 }}>
                              {item.shippingAddress.country},
                            </Text>
                            <Text style={{ fontSize: 12 }}>
                              {item.shippingAddress.pincode}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                          <Text style={{}}>Payment Method:&nbsp;</Text>
                          <Text style={{ fontSize: 12 }}>
                            {item.paymentMethod}
                          </Text>
                        </View>
                        <Text style={{ fontSize: 14 }}>
                          Total Amount: {item.totalAmount.toFixed(2)}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 12 }}>View Details</Text>
                      </View>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => updateHandler(item._id) }
                        style={{
                            backgroundColor: colors.veryPeri,
                            padding: 10,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                            }}
                    >
                        <Text style={{ fontSize: 12
                        ,color:colors.white
                         }}>Update</Text>
                      </TouchableOpacity>
                   
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AdminOrders;
