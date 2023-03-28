import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "./Carousel";
import Counter from "./Counter";
export default function productDetails() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <ConsumerHeader title="Product Details" />
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={styles.productDetails}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Bottle Water Pack
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>N900.00</Text>
        </View>
        <View style={styles.quantity}>
          <Counter />
        </View>
        <View style={styles.description}>
          <Text style={{ backgroundColor: "rgba(0, 0, 0, 0.02)", padding: 2 }}>
            Description
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            pellentesque augue lectus viverra interdum quis amet.
          </Text>
        </View>
        <View style={styles.review}>
          <Text>Reviews</Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </View>
        <View style={styles.additionalInfo}>
          <Text>Additional Information</Text>
          <MaterialCommunityIcons name="chevron-up" size={24} color="black" />
        </View>
        <View style={styles.actionBtn}>
          <Pressable style={styles.btnprimary}>
            <Text style={styles.btnPrimaryText}>Buy Now</Text>
          </Pressable>

          <Pressable style={styles.btnSec}>
            <Text style={styles.btnSecText}>Add To Cart</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    flex: 1,
  },
  carousel: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
  },
  quantity: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  description: {
    alignItems: "stretch",
    flex: 2,
    padding: 10,
  },
  review: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  additionalInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  actionBtn: {
    alignItems: "center",
    flex: 4,
    flexDirection: "column",
    paddingTop: 20,
  },
  btnprimary: {
    width: 329,
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
  btnSec: {
    width: 329,
    height: 50,
    borderWidth: 2,
    borderColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSecText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#147DF5",
    paddingLeft: 5,
  },
});
