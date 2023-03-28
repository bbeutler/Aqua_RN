import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import PagerView from 'react-native-pager-view';

const width = Dimensions.get("window").width;
const height = width * 0.45;

const images = [
  require("../../../../assets/image1.jpeg"),
  require("../../../../assets/image2.jpeg"),
  require("../../../../assets/image3.jpeg"),
  require("../../../../assets/image4.jpeg"),
  require("../../../../assets/image5.jpeg"),
];

export default class App extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", height: 200, backgroundColor: "#FFF" }}>
        <PagerView style={styles.pagerView} initialPage={0}>
            {
              images.map((value, index) => {
                return (
                  <View key={index} style={{paddingHorizontal: 20, paddingVertical: 10}}>
                    <View style={{flex: 1, borderRadius: 15, overflow: "hidden"}}>
                      <Image
                          key={index}
                          source={value}
                          style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                          }}
                        />
                    </View>
                  </View>
                )
              })
            }
        </PagerView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
