import { StyleSheet, Text, View ,Dimensions } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { colors } from '../styles/styles';
const screenWidth = Dimensions.get("screen").width;

const Chart = ({outOfStock=0,inStock=0}) => {

    const data = [
        {
            name: "Out of Stock",
            population: outOfStock,
            color: colors.veryPeri,
            legendFontColor: "#7F7F7F",
        },
        {
            name: "In Stock",
            population: inStock,
            color: colors.peri,
            legendFontColor: "#7F7F7F",
        },
    ];
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
        };
  return (
    <View
       
    >
        <PieChart
  data={data}
  width={screenWidth/1.2}
  height={200}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[0, -15]}
  absolute
/>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({})