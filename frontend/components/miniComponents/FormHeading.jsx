import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/styles'

const FormHeading = ({title}) => {
  return (
    <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}>{title}</Text>
      </View>
  )
}

export default FormHeading

const styles = StyleSheet.create({
    heading: {
        paddingTop: 50,
        fontSize: 40,
        fontWeight: "500",
        color: colors.veryPeri,
        marginBottom: 10,
      },
})