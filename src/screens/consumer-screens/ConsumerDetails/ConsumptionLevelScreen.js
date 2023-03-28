import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";

import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { PieChart } from "react-native-chart-kit";
import Legend from "./Legend";
import { AntDesign } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ConsumptionLevelScreen = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };
  const data = [
    {
      id: 1,
      name: "Mon",
      population: 60,
      color: "#E69F00",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 2,
      name: "Tue",
      population: 45,
      color: "#56B4E9",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 3,
      name: "Wed",
      population: 60,
      color: "#009E73",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 4,
      name: "Thu",
      population: 35,
      color: "#F0E442",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 5,
      name: "Fri",
      population: 10,
      color: "#0072B2",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 6,
      name: "Sat",
      population: 90,
      color: "#D55E00",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
    {
      id: 7,
      name: "Sun",
      population: 60,
      color: "#CC79A7",
      legendFontColor: "#21334F",
      legendFontSize: 12,
    },
  ];

  return (
    <View
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: "tomato", flex: 1 },
      ]}
    >
      <View style={styles.safeAreaContainer}>
        {/* <View style={styles.header}>
          <ConsumerHeader title="Statistics Level" />
        </View> */}
        <View style={styles.navbar}>
          <Text
            style={{
              color: "#147DF5",
              borderBottomWidth: 2,
              borderBottomColor: "#147DF5",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            DAILY
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: "#21334F" }}
          >
            WEEK
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: "#21334F" }}
          >
            MONTH
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: "#21334F" }}
          >
            YEAR
          </Text>
        </View>
        <View style={styles.dateLayout}>
          <View>
            <Pressable style={{ width: 25, height: 25 }}>
              <AntDesign name="left" size={20} color="#AAB2C5" />
            </Pressable>
          </View>
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: "#21334F" }}
          >
            12 Tuesday 2022
          </Text>
          <View>
            <Pressable style={{ width: 25, height: 25 }}>
              <AntDesign name="right" size={20} color="#AAB2C5" />
            </Pressable>
          </View>
        </View>
        <View style={styles.container}>
          <PieChart
            data={data}
            width={Dimensions.get("window").width}
            height={263}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"#fff"}
            paddingLeft={"15"}
            center={[75, 10]}
            absolute
            hasLegend={false}
          />
        </View>

        <View style={styles.legendContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              color: "black",
            }}
          >
            {data
              .filter((_, index) => index % 2 === 0)
              .map(({ name, color }) => (
                <Legend key={name} name={name} color={color} />
              ))}
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              color: "black",
            }}
          >
            {data
              .filter((_, index) => index % 2 === 1)
              .map(({ name, color }) => (
                <Legend key={name} name={name} color={color} />
              ))}
          </View>
        </View>

        <View style={styles.usageText}>
          <Text
            style={{
              paddingTop: 15,
              fontSize: 14,
              color: "#AAB2C5",
              fontWeight: "normal",
            }}
          >
            TOTAL USAGE TODAY
          </Text>
          <Text style={{ paddingTop: 15, fontSize: 32, color: "#21334F" }}>
            65.89%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ConsumptionLevelScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  legendContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,

    backgroundColor: "#fffff0",
  },
  container: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  usageText: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  // header: {
  //   flex: 1,
  // },
  dateLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
});
