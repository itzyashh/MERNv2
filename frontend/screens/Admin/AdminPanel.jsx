import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import FormHeading from '../../components/miniComponents/FormHeading'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import { ButtonBox } from '../Profile'
import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'

const AdminPanel = ({navigation}) => {
    const loading = false

    const navigationHandler = (text) => {
        switch (text) {
            case 'Product':
                navigation.navigate('NewProduct')
                break;
            case 'Orders':
                navigation.navigate('AdminOrders')
                break;
            case 'Category':
                navigation.navigate('AddCategory')
                break;
            default:
                console.log("default")
                break;
        }
    }



  return (
    <View        style={defaultStyle}    >
        <Header back />
        <View
            style={{paddingTop:50,marginBottom:0,alignSelf:'center'    }}
        >
            <FormHeading title="Admin Panel" />
        </View>
        {
            loading ? (
                <View 
                style={{alignSelf:'baseline',flexDirection:'row'}}
                >
                <Text>Loading... </Text>
                <ActivityIndicator size={'small'} />
                </View>
            )
            :
            (<>
                <Chart
                    inStock={12}
                    outOfStock={5}
                 />
                <View
                style={{flexDirection:'row',justifyContent:'space-around'}}
                >
                    <ButtonBox text="Product" icon="plus" handler={navigationHandler} />
                    <ButtonBox reverse text="Orders" icon="clipboard-list-outline" handler={navigationHandler} />
                    <ButtonBox text="Category" icon="plus" handler={navigationHandler} />
                </View>
                <View
                    style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,backgroundColor:colors.veryPeri,padding:12,paddingHorizontal:10,borderRadius:10}}
                >
                    <Text style={styles.headingText} >Image</Text>
                    <Text style={styles.headingText} >Price</Text>
                    <Text style={styles.headingText} >Product Name</Text>
                    <Text style={styles.headingText} >Category</Text>
                    <Text style={styles.headingText} >Stock</Text>

                </View>
                <Text style={{alignSelf:'center',fontSize: 8,marginTop:5,color:'gray'}} >Tap and hold to select and edit</Text>
                <Avatar.Icon icon="arrow-down-left" size={20} color='gray' style={{alignSelf:'center',backgroundColor:colors.transparent}} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    keyExtractor={(item) => item._id}
                    renderItem={({item,index}) => (
                        <ProductListItem item={item} index={index} />
                    )}
                />
                </>
            )
        }
        
    </View>

  )
}

export default AdminPanel

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'400',
        color:colors.white
    }
})