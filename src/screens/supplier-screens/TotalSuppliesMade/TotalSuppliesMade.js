import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

import FavouriteCustomer from "../../../components/FavouriteCustomer";
import FilterActionSheet from "../../../components/ActionSheets/FilterActionSheet/FilterActionSheet";

const customers = [
  {
    id: 1,
    name: "Pearl Somto",
    image: require("../../../../assets/customers/customer1.jpg"),
    location: "Egbeda, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 2,
    name: "Amaka Obi",
    image: require("../../../../assets/customers/customer2.jpg"),
    location: "Magodo, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 3,
    name: "Abasi John",
    image: require("../../../../assets/customers/customer3.jpg"),
    location: "Ago, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 4,
    name: "Pearl Somto",
    image: require("../../../../assets/customers/customer4.jpg"),
    location: "Egbeda, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 5,
    name: "Ezinne Charles",
    image: require("../../../../assets/customers/customer5.jpg"),
    location: "Ikorodu, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 6,
    name: "Chidinma Kate",
    image: require("../../../../assets/customers/customer6.jpg"),
    location: "Ibafo-mowe, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 7,
    name: "Babatunde Tunde",
    image: require("../../../../assets/customers/customer7.jpg"),
    location: "Okota, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 8,
    name: "John Doe",
    image: require("../../../../assets/customers/customer8.jpg"),
    location: "Ketu, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
  {
    id: 9,
    name: "Emeka Chukwuebuka",
    image: require("../../../../assets/customers/customer9.jpg"),
    location: "Magodo, Lagos",
    address: "34, Arinza street, Magodo, Phase 2, Lagos",
    phone: "07045763344",
    email: "Emekachukwuebuka@gmail.com",
    consumptionLevel: 65.89,
    bought: 78,
    remaining: 4,
  },
];

const modalId = "customer-modal";
const filterActionSheetId = "filter-modal";

function ProfileDetailsModal() {
  let [data, setData] = React.useState(customers[0]);

  return (
    <ActionSheet
      id={modalId}
      animated={true}
      onBeforeShow={(data) => {
        setData(data);
      }}
    >
      <View style={{ height: "75%" }}>
        <View style={styles.dash} />
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.headerText}>Profile Details</Text>
          </View>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              SheetManager.hide(modalId);
            }}
          >
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 100, paddingHorizontal: 20 }}>
          <View style={styles.customer}>
            <Image
              source={data.image}
              style={styles.customerImage}
            />

            <View style={{ marginStart: 10 }}>
              <Text style={styles.customerName}>{data.name}</Text>
              <Text style={styles.customerLocation}>
                {data.location}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 20, paddingHorizontal: 30 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 14, fontFamily: "Manrope_400Regular" }}>
              More info
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={24}
              color="black"
            />
            <Text style={styles.rowText}>{data.address}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="cellphone" size={24} color="black" />
            <Text style={styles.rowText}>{data.phone}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <Text style={styles.rowText}>{data.email}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30, }}>
          <View style={{flexDirection: "row", paddingHorizontal: 34}}>
            <TouchableHighlight
                style={{ backgroundColor: "#147DF500", paddingHorizontal: 10 }}
                underlayColor="#00000010"
                onPress={() => {
                    
                }}
            >
                <View style={styles.statusBtn}>
                <Text style={[styles.statusBtnText, {color: "#21334F"}]}>
                    Status
                </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={{ backgroundColor: "#38B0000D", paddingHorizontal: 10 }}
                underlayColor="#38B00020"
                onPress={() => {
                    
                }}
            >
                <View style={styles.statusBtn}>
                <Text style={[styles.statusBtnText, {color: "#38B000"}]}>
                    Active
                </Text>
                </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ActionSheet>
  );
}

function showDetails(item) {
  SheetManager.show(modalId, item);
}

function showFilterActionSheet() {
    SheetManager.show(filterActionSheetId);
}

function TotalSuppliesMade(props) {
  return (
    <View style={{backgroundColor: "#FFF"}}>
        <View style={{ width: "100%", height: "100%" }}>
            <View
            style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#F5F5F5",
            }}
            >
            <View
                style={{
                flex: 1,
                padding: 10,
                flexDirection: "row",
                backgroundColor: "#F5F5F5",
                alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                name="magnify"
                size={24}
                color="#979797"
                style={{
                    marginRight: 10,
                }}
                />
                <TextInput
                placeholder="Search"
                style={{
                    color: "#979797",
                    fontFamily: "Manrope_400Regular",
                    flex: 1,
                }}
                />
            </View>
            <TouchableOpacity onPress={() => {
                showFilterActionSheet();
            }}>
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    }}
                >
                    <Text
                    style={{
                        fontFamily: "Manrope_500Medium",
                        fontSize: 14,
                    }}
                    >
                        Filter
                    </Text>
                    <MaterialCommunityIcons
                    name="filter-outline"
                    size={24}
                    color="#21334F"
                    />
                </View>
            </TouchableOpacity>
            </View>

            <View style={{ width: "100%", padding: 20 }}>
            <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 18 }}>
                Past supplies
            </Text>
            </View>

            <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <FlatList
                data={customers}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => {
                return (
                    <FavouriteCustomer
                    name={item.name}
                    image={item.image}
                    location={item.location}
                    onPress={() => {
                        showDetails(item);
                    }}
                    />
                );
                }}
                ItemSeparatorComponent={() => {
                return <View style={{ width: "100%", marginBottom: 20 }} />;
                }}
                scrollEnabled={true}
            />
            </View>
        </View>
        <ProfileDetailsModal />
        <FilterActionSheet id={filterActionSheetId} />
    </View>
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

export default TotalSuppliesMade;
