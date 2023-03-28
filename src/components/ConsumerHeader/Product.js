import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";

const Product = ({ item, index, navigation }) => {
  const { companyName, location, product, quantity, link, rating } = item;
  const { street, city, state }  = location;
  const price = product?.price ? "N" + product?.price : "N" + 10;
  let imageUrl = product?.photos[0].imageUrl ? product?.photos[0].imageUrl : "";
  
  const containerPadding =
    index % 2 > 0 ? { paddingLeft: 5 } : { paddingRight: 5 };
  return (
    <View style={[{ width: "50%" }, containerPadding]}>
<<<<<<< HEAD
      <View style={styles.container}>
        <View style={{ height: 90 }}>
          <Image style={styles.card} source={{ uri: imageUrl }} />
          <View style={styles.ratingNo}>
            <Text style={[styles.rating, { color: "#000" }]}>{rating}</Text>

            <View style={[styles.container, {}]}>
              <TouchableHighlight
                underlayColor="#00000010"
                onPress={() => {
                  navigation.navigate("ProdcutDetails");
                }}
              >
                <>
                  <View style={{ height: 90 }}>
                    <Image style={styles.card} source={imageUrl} />
                    <View style={styles.ratingNo}>
                      <Text style={[styles.rating, { color: "#000" }]}>
                        {rating}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.companyText}>{company}</Text>
                  <Text style={styles.addressText}>{address}</Text>
                  <View style={styles.priceQuantity}>
                    <Text style={styles.priceText}>{price}</Text>
                    <Text style={styles.quantityText}> {quantity}</Text>
                  </View>

                  <View style={styles.products_links}>
                    <Text style={styles.linkText}>{link}</Text>
                    <AntDesign name="right" size={14} color="#147DF5" />
                  </View>
                </>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
=======
      {/* <View style={[styles.container]}> */}
        {/* <View style={{ height: 90 }}>
          <Image style={styles.card} source={{ uri: imageUrl }} />
          <View style={styles.ratingNo}>
            <Text style={[styles.rating, { color: "#000" }]}>4.3⭐</Text>

            
          </View>
        </View> */}
        <View style={[styles.container, {}]}>
          <TouchableHighlight
            underlayColor="#00000010"
            onPress={() => {
              
            }}
          >
            <View style={{
              marginHorizontal: 7,
              marginVertical: 10,
            }}>
              <View style={{ height: 90 }}>
                { imageUrl === "" ? <Image style={styles.card} source={require("../../../assets/image2.png")} /> : <Image style={styles.card} source={{uri: imageUrl}} /> }
                <View style={styles.ratingNo}>
                  <Text style={[styles.rating, { color: "#000" }]}>
                      4.3⭐
                  </Text>
                </View>
              </View>
              <Text style={styles.companyText}>{companyName}</Text>
              <Text style={styles.addressText}>{`${street} ${city}, ${state}`}</Text>
              <View style={styles.priceQuantity}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <Text style={styles.priceText}>{price}</Text>
                  <Text style={{fontFamily: "Manrope_400Regular", fontSize: 12, fontWeight: "normal"}}> per/bottle</Text>
                </View>
                <Text style={styles.quantityText}> {quantity}</Text>
              </View>

              <View style={styles.products_links}>
                <Text style={styles.linkText}>View store</Text>
                <AntDesign name="right" size={14} color="#147DF5" />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      {/* </View> */}
>>>>>>> baf77fb46fdb35852c3731ed4d92ab1b7b68880a
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    // zIndex: 5,
    marginBottom: 15,
    // marginRight: 3,
    // marginLeft: 3,
    // paddingHorizontal: 7,
    // paddingVertical: 10,
    borderColor: "white",
    // borderWidth: 1,
    shadowOffset: { width: 0, height: 2.5 },
    shadowColor: "#BEBEBE",
    shadowOpacity: 1,
    elevation: 10,
  },
  card: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  companyText: {
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    marginBottom: 5,
  },
  addressText: {
    fontSize: 12,
    fontFamily: "Manrope_400Regular",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    marginBottom: 2,
  },
  priceQuantity: {
    flexDirection: "row",
  },
  priceText: {
    fontSize: 12,
    fontFamily: "Manrope_700Bold",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
  },
  quantityText: {
    fontSize: 12,
    fontFamily: "Manrope_400Regular",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
  },
  products_links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 12,
    fontFamily: "Manrope_700Bold",
    textAlign: "left",
    color: "rgba(20, 125, 245, 1)",
  },
  ratingNo: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#21334F40",
    // width: 54,
    // height: 24,
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
