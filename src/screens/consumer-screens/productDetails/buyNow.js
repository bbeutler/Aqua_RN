import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from "react-native";
import React from "react";
import Header from "../../../components/ConsumerHeader/Header";
import Carousel from "./Carousel";
import Counter from "./Counter";
import GoBack from "../../../components/GoBack/GoBack";

const BuyNow = () => {
  return (
    <View style={{backgroundColor: "#FFF", flex: 1}}>
      <View style={[styles.container]}>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={[styles.productDetails, {}]}>
          <Text style={{ marginBottom: 10, fontSize: 18, color: "#21334F", fontFamily: "Manrope_500Medium"}}>
            Bottle Water Pack
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 24, color: "#21334F", fontFamily: "Manrope_500Medium"}}>N900.00</Text>
          
          <Text style={{ marginBottom: 10, fontSize: 14, color: "#38B000", fontFamily: "Manrope_400Regular" }}>In Stock</Text>
        </View>
        <View style={styles.counter}>
          <Counter />
        </View>
        <View style={[styles.btnView, {paddingHorizontal: 20}]}>
          <TouchableHighlight underlayColor="#1B4473" onPress={() => {}} style={styles.btnprimary}>
            <Text style={[styles.btnPrimaryText, {fontFamily: "Manrope_600SemiBold", fontSize: 14}]}>Continue To Buy</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#00000010" onPress={() => {}} style={[styles.btnprimary, {backgroundColor: "transparent"}]}>
            <Text style={[styles.btnPrimaryText, {color: "#147DF5", fontFamily: "Manrope_600SemiBold", fontSize: 14}]}>Remove</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // alignItems: "center",
    justifyContent: "space-between",
    height: "80%",
  },
  btnprimary: {
    width: "100%",
    height: 50,
    backgroundColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnPrimaryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#fff",
    paddingLeft: 5,
  },
  btnView: {
    marginTop: 20,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  productDetails: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
});
