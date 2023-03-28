import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const SupplierCatalogue = ({ product }) => {
  const { productname, price, quantity, imageUrl, rating, instock } = product;
  return (
    <View style={styles.supplierCatalogue}>
      <View style={{ height: 95, width: "100%" }}>
        <Image style={styles.card} source={imageUrl} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 12,
            color: "#21334F",
          }}
        >
          {productname}
        </Text>
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>
      <View style={styles.priceQuantity}>
        <Text
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 12,
            color: "#21334F",
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 10,
            color: "#21334F",
          }}
        >
          {" "}
          {quantity}
        </Text>
      </View>
      <View style={styles.products_rating}>
        <Ionicons name="star" size={18} color="#FFBE0B" />
        <Ionicons name="star" size={18} color="#FFBE0B" />
        <Ionicons name="star" size={18} color="#FFBE0B" />
        <Ionicons name="star" size={18} color="#FFBE0B" />
        <Ionicons name="star-half" size={18} color="#FFBE0B" />
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 12,
            color: "#21334F",
            paddingBottom: 3,
            paddingTop: 3,
          }}
        >
          {rating}
        </Text>
      </View>
      <View style={{ padding: 5 }}>
        <Text
          style={{
            color: "#38B000",
            fontSize: 10,
            fontFamily: "Manrope_400Regular",
          }}
        >
          {instock}
        </Text>
      </View>
      <Pressable
        style={{
          width: "100%",
          height: 32,
          backgroundColor: "#147DF5",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: "Manrope_600SemiBold",
          }}
        >
          Add to Cart
        </Text>
      </Pressable>
    </View>
  );
};

export default SupplierCatalogue;

const styles = StyleSheet.create({
  supplierCatalogue: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    elevation: 10,
  },
  card: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  priceQuantity: {
    flexDirection: "row",
    padding: 5,
  },
  products_rating: {
    flexDirection: "row",
    padding: 5,
  },
});
