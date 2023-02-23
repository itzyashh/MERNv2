import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'
import Heading from './Heading'

const SelectComponent = (
    {
        visible,
        setVisible,
        categories=[],
        setCategory,
        setCategoryID,
    }
) => {
  return (
    visible && (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={{alignSelf:'flex-end'}}
                onPress={()=>setVisible(false)}
            >

            <Avatar.Icon 
            size={30} icon="close"
            style={{alignSelf:'flex-end'}}
            />
            </TouchableOpacity>
             <Heading text1='Select Category' text2='' />
            <FlatList
                data={categories}

                keyExtractor={(item)=>item._id.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity
                        style={{backgroundColor:colors.veryPeri,borderRadius:10,marginVertical:10}}
                        onPress={()=>{
                            setCategory(item.category)
                            setCategoryID(item._id)
                            setVisible(false)
                        }
                        }
                    >
                        <Text style={{marginVertical:10
                        ,textAlign:'center',color:colors.white
                        }}>{item.category}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
  )
}

export default SelectComponent

const styles = StyleSheet.create({
    container: {
    
        backgroundColor:colors.white,
        position:'absolute',
        padding:35,
        borderRadius:20,
        width:'90%' ,
        height:'90%',
        borderWidth:1,
        alignSelf:'center',
        top:50
    
    }


    
    })