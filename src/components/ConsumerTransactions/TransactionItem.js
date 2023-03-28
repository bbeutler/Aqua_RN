import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const TransactionItem = (props) => {
  const { supplier, quantity, price, date, imgUrl } = props.menu;
  return (
    <View style={styles.transRow}>
      <View style={styles.transfirst}>
        <Image style={styles.transImage} source={imgUrl} />
        <View style={styles.transText}>
          <Text style={styles.supplierText}>{supplier}</Text>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      </View>
      <View style={{alignItems: "flex-end"}}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transRow: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    // zIndex: 5,
    marginTop: 10,
    borderRadius: 2,
    height: 64,
    shadowOffset: { width: 0, height: 2.5 },
    shadowColor: '#BEBEBE',
    shadowOpacity: 1,
    elevation:10,
  },
  transfirst: {
    flexDirection: "row",
  },
  transImage: {
    height: 32,
    width: 32,
  },
  transText: {
    paddingHorizontal: 10,
  },
  supplierText: {
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
    color: "rgba(33, 51, 79, 1)",
  },
  priceText: {
    color: "rgba(56, 176, 0, 1)",
    fontSize: 14,
    fontFamily: "Manrope_500Medium",
    textAlign: "left",
  },
  dateText: {
    fontSize: 12,
    fontFamily: "Manrope_300Light",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
  },
  quantityText: {
    fontFamily: "Manrope_300Light",
    fontSize: 12,
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    color: "#21334F",
  },
});
