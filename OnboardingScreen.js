import React from 'react';
import { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { COLORS, SIZES } from "./src/constants/theme";
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import GoBack from './src/components/GoBack/GoBack';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Supplier from './src/screens/supplier-screens/Supplier';
import FavouriteCustomers from './src/screens/supplier-screens/FavouriteCustomers';
import TotalSupplyMadeActivityOverview from './src/screens/TotalSupplyMadeActivityOverview';
import CheckMailScreen from './src/screens/CheckMailScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import ConfirmEmail from './src/screens/ConfirmEmail';
import Customer from './src/screens/consumer-screens/Customer';
import TotalSuppliesMade from './src/screens/supplier-screens/TotalSuppliesMade/TotalSuppliesMade';
import SupplierProfileDetailScreen from './src/screens/supplier-screens/SupplierProfileDetailScreen';
import ProfileSettings from './src/screens/consumer-screens/ProfileSettings';
import NotificationSettings from './src/screens/consumer-screens/NotificationSettings/NotificationSettings';
import ReferSettings from './src/screens/consumer-screens/ReferSettings';
import SupplierRegisterationScreen from './SupplierRegisterationScreen';
import ConsumerRegisterationScreen from './ConsumerRegisterationScreen';
import ConsumptionLevelScreen from './src/screens/consumer-screens/ConsumerDetails/ConsumptionLevelScreen';
import BuyNow from './src/screens/consumer-screens/productDetails/buyNow';


const slides = [
     {
       id: 1,
       title: "Find the best deals and special offers",
       description:
         "Signing up and receiving your order is straightforward and effortless. There is no need to contact the seller or sign a contract.",
       image: require("./src/assets/boarding1.png"),
     },
     {
       id: 2,
       title: "Transparent Pricing",
       description:
         "Before placing an order, customers will input their address for delivery and receive detailed pricing information. There are no hidden costs!",
       image: require("./src/assets/boarding2.png"),
     },
     {
       id: 3,
       title: "Timely Delivery",
       description:
         "Depending on the customer’s needs, delivery can be one-time or long-running",
       image: require("./src/assets/boarding3.png"),
     },
   ];

function Onboarding () {
     const [showHomePage, setShowHomePage] = useState(false);
     const buttonLabel = (label) => {
        return (
          <View
            style={{
              padding: 12,
              backgroundColor: COLORS.primary,
              width: 154,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: SIZES.h4,
                marginRight: 10
              }}
            >{label}</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        );
    };
        const buttonNewLabel = (label) => {
          return (
            <View
              style={{
                padding: 12,
                backgroundColor: "#FFFFFF",
                width: 120,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#21334F",
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                {label}
              </Text>
            </View>
          );
        };
        if (!showHomePage) {
          return (
            <AppIntroSlider
              data={slides}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      alignItems: "center",
                      height: '70%'
                    }}
                  >
                    <View style={{width: "100%", height: 400}}>
                      <Image
                        source={item.image}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        resizeMode="cover"
                      />
                    </View>
      
                    <View style={{padding: 20}}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: COLORS.title,
                          fontFamily: "Manrope_800ExtraBold",
                          fontSize: 20,
                          marginTop: 25,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          marginTop: 5,
                          color: COLORS.title,
                          fontFamily: "Manrope_400Regular",
                          fontSize: 14,
                          marginTop: 15,
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                );
              }}
              activeDotStyle={{
                backgroundColor: COLORS.primary,
                marginBottom: 250
              }}
              dotStyle={{
                backgroundColor: '#BEBEBE',
                marginBottom: 250
              }}
              showSkipButton
              renderNextButton={() => buttonLabel("Next")}
              renderSkipButton={() => buttonNewLabel("Skip")}
              renderDoneButton={() => buttonLabel("Get Started")}
              onDone={() => {
                setShowHomePage(true);
              }}
            />
          );
        } else {
          return (
            <Stack.Navigator>
              
              <Stack.Screen
                name="Home"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />

            <Stack.Screen name="SignUp" component={RegisterScreen} 
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen name="SupplierRegisterationScreen" component={SupplierRegisterationScreen} 
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen name="ConsumerRegisterationScreen" component={ConsumerRegisterationScreen}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen name="Login" component={Login} 
              options={{
                headerShown: false
              }}/>

            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} 
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen name="CheckMail" component={CheckMailScreen} 
              options={{
                headerShown: false
              }}/>

            <Stack.Screen
              name="ConfirmEmail"
              component={ConfirmEmail}
              options={{
                headerShown: false
              }}
              />

            <Stack.Screen
              name="CreateNewPasswordScreen"
              component={CreateNewPasswordScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name="Supplier"
              component={Supplier}
              options={{ headerShown: false }}
              />

            <Stack.Screen
              name="SupplierProfileDetailScreen"
              component={SupplierProfileDetailScreen}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} title="Edit Profile" />
                }
              }}
              />

            <Stack.Screen
              name="FavoriteCustomers"
              component={FavouriteCustomers}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}
              />

            <Stack.Screen name="SupplierTotalSupplies" component={TotalSuppliesMade} 
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen name="Customer" component={Customer} 
              options={{
                headerShown: false
              }}/>

            <Stack.Screen name="ProdcutDetails" component={BuyNow} 
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}/>

            <Stack.Screen
              name="SupplierActivityOverview"
              component={TotalSupplyMadeActivityOverview}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} />
                }
              }}
            />
            
            <Stack.Screen
              name="ConsumptionLevelScreen"
              component={ConsumptionLevelScreen}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} title="Statistics Level" />
                }
              }}
            />

            <Stack.Screen
              name="CustomerProfileSettings"
              component={ProfileSettings}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} title="Edit Profile" />
                }
              }}
            />

            <Stack.Screen
              name="CustomerNotificationSettings"
              component={NotificationSettings}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} title="Notifications" />
                }
              }}
            />

            <Stack.Screen
              name="CustomerReferSettings"
              component={ReferSettings}
              options={{
                header: ({navigation}) => {
                  return <GoBack navigation={navigation} title="Invite Friends" />
                }
              }}
            />
            </Stack.Navigator>
          );
        }
}

export default Onboarding;