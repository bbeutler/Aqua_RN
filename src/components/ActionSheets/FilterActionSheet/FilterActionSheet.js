import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

function FilterActionSheet({id}) {
    const filterCategories = [ "Name", "Date", "Time", "Items", "Price", "Location" ]

    return (
      <ActionSheet
        id={id}
        animated={true}
        containerStyle={{
          marginBottom: 50
        }}
      >
        <View style={styles.dash} />
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.headerText}>Filter</Text>
          </View>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              SheetManager.hide(id);
            }}
          >
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20}}>
            <FlatList 
              data={filterCategories}
              keyExtractor={item => item}
              renderItem={({item})=>{
                  return (
                      <TouchableHighlight onPress={() => {
                          
                      }} underlayColor="#00000010">
                          <Text style={{fontFamily: "Manrope_400Regular", color: "#21334F", fontSize: 14, padding: 5, margin: 5, textAlign: "left"}}>{item}</Text>
                      </TouchableHighlight>
                  )
              }}/>
        </View>
      </ActionSheet>
    );
}

const styles = StyleSheet.create({
    dash: {
      height: 4,
      width: "20%",
      backgroundColor: "#EBEBEB",
      alignSelf: "center",
      marginVertical: 15,
      borderRadius: 2,
    },
    header: {
      flexDirection: "row",
      paddingBottom: 15,
      borderBottomColor: "#EBEBEB",
      borderBottomWidth: 1,
    },
    headerText: {
      fontSize: 14,
      color: "#21334F",
      fontFamily: "Manrope_700Bold",
    },
    close: {
      position: "absolute",
      right: 20,
      top: 0,
    },
    customer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      flexDirection: "row",
    },
    customerImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    customerName: {
      fontFamily: "Manrope_700Bold",
      color: "#21334F",
    },
    customerLocation: {
      fontFamily: "Manrope_400Regular",
      color: "#21334F",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15,
    },
    rowText: {
      fontSize: 14,
      marginStart: 10,
      fontFamily: "Manrope_400Regular",
      flex: 1,
      flexShrink: 1,
      textAlign: "left",
    },
    statusBtn: {
      height: 31,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    statusBtnText: {
      fontSize: 14,
      fontFamily: "Manrope_400Regular",
      color: "#fff",
    },
    toolbar: {
      width: "100%",
      height: 68,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    toolbarTxt: {
      fontFamily: "Manrope_400Regular",
      fontSize: 14,
    },
});

export default FilterActionSheet;