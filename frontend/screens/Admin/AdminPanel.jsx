import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'

const AdminPanel = () => {
  return (
    <View
        style={defaultStyle}
    >
        <Header back />
      <Text>AdminPanel</Text>
    </View>
  )
}

export default AdminPanel

const styles = StyleSheet.create({})