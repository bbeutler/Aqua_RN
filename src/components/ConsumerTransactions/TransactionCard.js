import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import TransactionItems from "./TransactionItems";
import TransactionItem from "./TransactionItem";
// import { Dimensions } from "react-native-web";

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={TransactionItems}
        renderItem={({ item }) => <TransactionItem menu={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // backgroundColor: "#000",
    // justifyContent: "center",
    width: "100%",
    // marginVertical: 10,
    flex: 1,
  },
});
