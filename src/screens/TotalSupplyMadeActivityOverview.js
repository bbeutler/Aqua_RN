import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  Picker,
  Modal,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const messages = [
  {
    id: 1,
    title: "112",
    description: "Bottles delivered successful",
  },
  {
    id: 2,
    title: "24",
    description: "Default Bottles",
  },
  {
    id: 3,
    title: "7",
    description: "Failed delivery",
  },
];
import ListItemForTotalSupply from "../components/ListItemForTotalSupply";
import { SafeAreaView } from "react-native-safe-area-context";
class TotalSupplyMadeActivityOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overview}>
          <Text style={styles.overviewText}>Activity OverView</Text>
          <Text style={styles.supplyText}>
            Showing all supplies, failed and delivered
          </Text>
        </View>
        <View style={styles.horizontal}></View>
        <View style={styles.main}>
          <View style={styles.supplymadeIconSection}>
            <Text style={{fontFamily: "Manrope_700Bold", fontSize: 14}}>Supply Made</Text>
            <View style={styles.Icon_part}>
              <Text style={{fontFamily: "Manrope_300Light", fontSize: 12}}>In the past</Text>
              <View>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={30}
                  color="#21334f"
                  style={styles.icon}
                  onPress={() => {
                    // if (this.state.show == false) {
                    //   this.setState({ show: true });
                    // } else {
                    //   this.setState({ show: false });
                    // }
                  }}
                />
                <Modal transparent={true} visible={this.state.show}>
                  <View
                    style={{
                      backgroundColor: "rgb(201, 208, 210)", //RGB (201, 208, 210)
                      margin: 10,
                      padding: 20,
                      width: 100,
                      // backgroundColor: " #FFFFFF",
                      position: "absolute",
                      right: 20,
                      top: 160,
                    }}
                  >
                    <Text>7 days</Text>
                    <Text>2 weeks</Text>
                    <Text>1 month</Text>
                    <Text>6 month</Text>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", overflow: "hidden" }}>
            <LineChart
              withDots={false}
              fromZero={true}
              data={{
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    data: [
                      10, 15, 30, 40, 60, 50, 10
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              // yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                // backgroundColor: "#e26a00",
                backgroundGradientFrom: "#FFF",
                backgroundGradientTo: "#FFF",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 0.5) => `rgba(20, 125, 245, 0.6)`,
                labelColor: () => `rgba(33, 51, 79, 1)`,
                strokeWidth: -1,
                style: {
                  borderRadius: 16
                },
                // propsForDots: {
                //   r: "6",
                //   strokeWidth: "2",
                //   stroke: "#ffa726"
                // }
              }}
              bezier
              style={{
                marginVertical: 10,
                right: 10,
                borderRadius: 0
              }}
          />
          </View>
          <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
              <ListItemForTotalSupply
                title={item.description}
                num={item.title}
              />
            )}
            ItemSeparatorComponent={() => {
              return <View style={{width: "100%", height: 1, backgroundColor: "#21334F0F"}} />
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  overview: {
    padding: 20,
    justifyContent: "center"
  },
  overviewText: {
    fontSize: 24,
    color: "#21334f",
    fontFamily: "Manrope_700Bold",
  },
  supplyText: {
    color: "#21334f",
    marginTop: 5,
    fontFamily: "Manrope_300Light",
    fontSize: 12,
  },
  horizontal: {
    backgroundColor: "#00000005",
    height: 6,
  },
  main: {
    // backgroundColor: "tomato",
    padding: 10,
    paddingHorizontal: 20
  },
  supplymadeIconSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  supply_made: {
    color: "#21334f",
    fontSize: 14,
    fontWeight: "700",
  },
  Icon_part: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 2,
  },
  icon_text: {
    color: "#21334f",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "300",
    fontStyle: "normal",
  },
  modal: {
    backgroundColor: "rgb(201, 208, 210)",
  },
});

export default TotalSupplyMadeActivityOverview;
