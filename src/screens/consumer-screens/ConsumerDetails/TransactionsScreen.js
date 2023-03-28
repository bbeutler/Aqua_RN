import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { Ionicons } from "@expo/vector-icons";
import TransactionCard from "../../../components/ConsumerTransactions/TransactionCard";
import { SafeAreaView } from "react-native-safe-area-context";
const TransactionsScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
            <ConsumerHeader title="Transaction History" />
          </View>
          <TransactionCard />
      </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
