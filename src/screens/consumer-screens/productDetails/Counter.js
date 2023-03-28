import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView } from "react-native";
import React from "react";

export default class App extends React.Component {
  state = {
    value: 10,
  };
  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{ fontSize: 14, color: "#21334F", fontFamily: "Manrope_400Regular" }}>
            Select The Quantity
          </Text>
          <View style={styles.container__cartAction}>
            <TouchableHighlight
              underlayColor="#1B4473"
              style={styles.container__cartAction__btn}
              onPress={this.decrementValue}
            >
              <Text style={{color: "#FFF"}}>-</Text>
            </TouchableHighlight>
            <View style={styles.container__quantity}>
              <Text style={{ fontSize: 14, color: "#21334F" }}>
                {this.state.value}
              </Text>
            </View>
            <TouchableHighlight
              underlayColor="#1B4473"
              onPress={this.incrementValue}
              style={styles.container__cartAction__btn}
            >
              <Text style={{color: "#FFF"}}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  container__cartAction: {
    flexDirection: "row",
  },
  container__cartAction__btn: {
    height: 34,
    width: 36,
    backgroundColor: "#147DF5",
    justifyContent: "center",
    alignItems: "center",
  },
  container__quantity: {
    width: 84,
    height: 34,
    borderWidth: 1,
    borderColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
});
