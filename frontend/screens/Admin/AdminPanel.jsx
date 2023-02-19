import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import FormHeading from '../../components/miniComponents/FormHeading'
import { ActivityIndicator } from 'react-native-paper'
import { ButtonBox } from '../Profile'
import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'

const AdminPanel = () => {
    const loading = false

    const navigationHandler = (text) => {
        switch (text) {
            case 'Product':
                console.log("product")
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
            style={{paddingTop:50,marginBottom:20,alignSelf:'center'    }}
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
                <FlatList
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