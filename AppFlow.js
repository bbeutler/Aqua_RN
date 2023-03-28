import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  Manrope_300Light,
  Manrope_500Medium,
} from "@expo-google-fonts/manrope";
import { Link, NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import Onboarding from './OnboardingScreen';
import BuyNow from "./src/screens/consumer-screens/productDetails/buyNow";

const prefix = Linking.createURL('/');

const linkConfig = {
  screens: {
    ConfirmEmail: "ConfirmEmail"
  }
}
export default function AppFlow() {

  const linking = {
    prefixes: [prefix, "http://www.aqua-deca.com"],
    linkConfig
  };

  // console.log(linking);

  const redirectUrl = Linking.createURL('/Authentication');
  

  Linking.addEventListener(redirectUrl, (event) => {
    console.log("event", event);
  });

  Linking.getInitialURL()
  .then(response => {
    console.log("response", response);
  })
  .catch(error => {

  })

  // console.log(linking);

  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    Manrope_300Light,
    Manrope_600SemiBold,
    Manrope_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
          <Onboarding />
          {/* <BuyNow /> */}
        </SafeAreaProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
