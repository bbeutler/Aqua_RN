import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import SuppliersDetailsHeader from "./SuppliersDetailsHeader";
import ContactSupplier from "./ContactSupplier";
import SupplierCatalogue from "./SupplierCatalogue";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import Footer from "./Footer";
//const baseURL = 'https://aquawaterapp.herokuapp.com'
import { create } from "apisauce";
import axios from "axios";

// .then(response=>{
//   if(!response.ok){
//     response.problem
//   }
// })

const products = [
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water1.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water2.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water3.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water4.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water5.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water6.jpg"),
  },
];

const SupplierDetailsScreen = () => {
  //const apiClient = create({ baseURL: "https://aquawaterapp.herokuapp.com" });
  const axio = axios.create({ baseURL: "https://aquawaterapp.herokuapp.com" });
  const [listing, setListing] = useState([]);
  useEffect(() => {
    loadListing();
  }, []);
  const loadListing = async () => {
    try {
      // const response = await fetch(
      //   "https://aquawaterapp.herokuapp.com/api/Product/GetProductsByCompanyID"
      // );
      const response = await axio.get("/api/Product/GetProductsByCompanyID");
      //const data = await response.json();
      // console.log(response.body);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView
      style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}
    >
      <SuppliersDetailsHeader />
      <ScrollView>
        <ContactSupplier />
        <View
          style={{
            width: "100%",
            height: 7,
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            borderRadius: 5,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 14,
            padding: 10,
          }}
          onPress={() => loadListing()}
        >
          Products
        </Text>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <FlatList
            numColumns={2}
            data={products}
            scrollEnabled={true}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <SupplierCatalogue product={item} index={index} />
            )}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupplierDetailsScreen;

const styles = StyleSheet.create({});
